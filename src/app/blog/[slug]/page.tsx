import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  PenLine,
} from "lucide-react";
import { Nav } from "@/components/landing/nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { FinalCta } from "@/components/landing/final-cta";
import {
  formatPostDate,
  getAllPosts,
  getPost,
  getRelatedPosts,
} from "@/lib/blog";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  jsonLdGraph,
  pageMetadata,
} from "@/lib/seo";

/** Static article pages: allow the route to block while the post is read. */
export const instant = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Post not found", robots: { index: false, follow: false } };
  }

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: {
      url: `/blog/${post.slug}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: post.title,
    },
    article: {
      publishedTime: `${post.date}T00:00:00.000Z`,
      section: post.category,
      tags: post.tags,
    },
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const toc = post.toc.filter((item) => item.level === 2);

  const articleJsonLd = jsonLdGraph(
    {
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
      headline: post.title,
      description: post.description,
      datePublished: `${post.date}T00:00:00.000Z`,
      dateModified: `${post.date}T00:00:00.000Z`,
      inLanguage: "en",
      articleSection: post.category,
      keywords: post.tags.join(", "),
      url: absoluteUrl(`/blog/${post.slug}`),
      mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
      image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: absoluteUrl("/blog"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: absoluteUrl(`/blog/${post.slug}`),
        },
      ],
    },
  );

  return (
    <div className="min-h-screen bg-page">
      <Nav />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: articleJsonLd }}
        />

        <article>
          <header className="relative overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(52%_60%_at_50%_0%,#ffe7dc_0%,rgba(255,255,255,0)_75%)]" />

            <div className="relative mx-auto max-w-[820px] px-5 pb-12 pt-[124px] sm:pb-14 sm:pt-[148px]">
              <nav aria-label="Breadcrumb" className="text-[13px] text-muted">
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li>
                    <Link href="/" className="hover:text-ink">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/blog" className="hover:text-ink">
                      Blog
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="truncate text-ink/50" aria-current="page">
                    {post.category}
                  </li>
                </ol>
              </nav>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-600">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime} min read
                </span>
              </div>

              <h1 className="font-heading mt-5 text-[34px] leading-[1.08] tracking-[-0.035em] text-ink sm:text-[50px]">
                {post.title}
              </h1>
              <p className="mt-5 max-w-[700px] text-[17px] leading-relaxed text-ink/65 sm:text-[19px]">
                {post.description}
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-[760px] px-5 pb-16 pt-10 sm:pt-14">
            {toc.length >= 3 ? (
              <aside className="mb-10 rounded-2xl border border-line bg-white p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  In this article
                </p>
                <ol className="mt-3 space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-[14.5px] text-ink/75 transition-colors hover:text-brand-500"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </aside>
            ) : null}

            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-500">
                  <PenLine className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[14.5px] font-semibold text-ink">
                    Written by {SITE_NAME}
                  </p>
                  <p className="text-[13px] text-muted">
                    Notes on advertising for indie builders.
                  </p>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-brand-500"
              >
                <ArrowLeft className="h-4 w-4" />
                All posts
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="mx-auto max-w-[1080px] px-4 pb-20">
            <h2 className="font-heading text-[24px] tracking-[-0.02em] text-ink sm:text-[30px]">
              Keep reading
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-5 transition-colors hover:border-ink/20"
                >
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-brand-500">
                    {item.category}
                  </span>
                  <p className="mt-2 text-[16px] font-semibold leading-snug text-ink">
                    {item.title}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink/50 transition-colors group-hover:text-ink">
                    {item.readingTime} min read
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}
