import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Rss } from "lucide-react";
import { PageShell } from "@/components/landing/page-shell";
import { getAllPosts, formatPostDate, type PostMeta } from "@/lib/blog";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  jsonLdGraph,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Practical guides on advertising indie products: budgets, copy, distribution, analytics and the channels that actually work for small teams.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  const blogJsonLd = jsonLdGraph({
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `${SITE_NAME} Blog`,
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/blog"),
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: `${post.date}T00:00:00.000Z`,
      url: absoluteUrl(`/blog/${post.slug}`),
    })),
  });

  return (
    <PageShell
      kicker="Blog"
      title="Notes for indie advertisers."
      description="Practical guides on budgets, copy, distribution and measurement — written for people doing marketing between building sessions."
      heroExtra={
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-muted">
            {posts.length} posts
          </span>
          <a
            href="/blog/rss.xml"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-ink/20"
          >
            <Rss className="h-3.5 w-3.5 text-brand-500" />
            RSS feed
          </a>
        </div>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: blogJsonLd }}
      />

      {featured ? (
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-[24px] border border-line bg-white p-7 transition-colors hover:border-ink/20 sm:p-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-600">
              Latest
            </span>
            <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-muted">
              {featured.category}
            </span>
          </div>

          <h2 className="font-heading mt-5 max-w-[760px] text-[28px] leading-[1.12] tracking-[-0.03em] text-ink sm:text-[40px]">
            {featured.title}
          </h2>
          <p className="mt-4 max-w-[680px] text-[15.5px] leading-relaxed text-muted sm:text-[16.5px]">
            {featured.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
            <span>{formatPostDate(featured.date)}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {featured.readingTime} min read
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-brand-500">
              Read the post
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {rest.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </PageShell>
  );
}

function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ink/20"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-500">
          {post.category}
        </span>
        <ArrowUpRight className="h-4 w-4 text-ink/30 transition-colors group-hover:text-ink" />
      </div>

      <h2 className="mt-3 text-[19px] font-semibold leading-snug tracking-[-0.01em] text-ink">
        {post.title}
      </h2>
      <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-muted">
        {post.description}
      </p>

      <div className="mt-5 flex items-center gap-4 text-[12.5px] text-muted">
        <span>{formatPostDate(post.date)}</span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {post.readingTime} min
        </span>
      </div>
    </Link>
  );
}
