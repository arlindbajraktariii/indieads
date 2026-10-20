import type { Metadata } from "next";

/**
 * Central SEO config. Set NEXT_PUBLIC_SITE_URL in production (e.g.
 * https://roketad.com) so canonicals, sitemap and Open Graph URLs are absolute.
 */
export const SITE_NAME = "RoketAd";
export const SITE_TAGLINE = "Advertising for indie hackers";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://roketad.com"
).replace(/\/+$/, "");

export const SITE_DESCRIPTION =
  "RoketAd is an advertising network for indie hackers, SaaS founders and developers. Reach founders, developers and early adopters across independent tech sites — without a marketing team or a huge budget.";

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "RoketAd — advertising for indie hackers",
};

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type MetaImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

type ArticleMeta = {
  publishedTime: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
};

type PageMetaInput = {
  /** Page title without the “— RoketAd” suffix (added automatically). */
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  image?: MetaImage;
  article?: ArticleMeta;
};

/**
 * Shared metadata for every page: canonical URL, Open Graph, Twitter card
 * and optional article fields. Titles get the root template suffix.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
  image,
  article,
}: PageMetaInput): Metadata {
  const ogTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const images = [image ?? OG_IMAGE];
  const social = {
    title: ogTitle,
    description,
    images,
  };

  const base: Metadata = {
    title,
    description,
    alternates: { canonical: path },
    twitter: { card: "summary_large_image", ...social },
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: false,
            googleBot: { index: false, follow: false },
          },
        }
      : {}),
  };

  if (article) {
    return {
      ...base,
      openGraph: {
        type: "article",
        url: path,
        siteName: SITE_NAME,
        locale: "en_US",
        title: ogTitle,
        description,
        images,
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime ?? article.publishedTime,
        section: article.section,
        tags: article.tags,
        authors: [SITE_NAME],
      },
    };
  }

  return {
    ...base,
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      title: ogTitle,
      description,
      images,
    },
  };
}

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  foundingDate: "2026",
  areaServed: "Worldwide",
  knowsAbout: [
    "indie hacking",
    "advertising",
    "SaaS marketing",
    "developer marketing",
  ],
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function jsonLdGraph(...nodes: object[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  });
}
