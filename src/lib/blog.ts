import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  category: string;
  tags: string[];
  readingTime: number;
};

export type Post = PostMeta & {
  html: string;
  toc: { id: string; text: string; level: 2 | 3 }[];
};

function slugifyHeading(text: string): string {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/gi, " ")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Add stable ids to h2/h3 so sections can be linked, and collect a TOC. */
function addHeadingIds(html: string): { html: string; toc: Post["toc"] } {
  const used = new Set<string>();
  const toc: Post["toc"] = [];

  const withIds = html.replace(
    /<h([23])>(.*?)<\/h\1>/g,
    (_match, level: string, inner: string) => {
      const base = slugifyHeading(inner) || "section";
      let id = base;
      let suffix = 2;
      while (used.has(id)) {
        id = `${base}-${suffix++}`;
      }
      used.add(id);

      const text = inner.replace(/<[^>]+>/g, "").trim();
      toc.push({ id, text, level: level === "2" ? 2 : 3 });

      return `<h${level} id="${id}">${inner}</h${level}>`;
    },
  );

  return { html: withIds, toc };
}

function loadPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data, content } = matter(raw);

      const rendered = marked.parse(content, { async: false }) as string;
      const { html, toc } = addHeadingIds(rendered);

      const words = content.trim().split(/\s+/).filter(Boolean).length;
      const readingTime =
        typeof data.readingTime === "number"
          ? data.readingTime
          : Math.max(1, Math.round(words / 220));

      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        date: String(data.date ?? "2026-01-01"),
        category: String(data.category ?? "Blog"),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        readingTime,
        html,
        toc,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Newest first, without the rendered body. */
export function getAllPosts(): PostMeta[] {
  return loadPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    category: post.category,
    tags: post.tags,
    readingTime: post.readingTime,
  }));
}

export function getPost(slug: string): Post | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  return loadPosts().find((post) => post.slug === slug) ?? null;
}

/** Same category first, then the most recent other posts. */
export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const posts = getAllPosts().filter((post) => post.slug !== slug);
  const current = loadPosts().find((post) => post.slug === slug);

  const sameCategory = current
    ? posts.filter((post) => post.category === current.category)
    : [];

  const rest = posts.filter((post) => !sameCategory.includes(post));
  return [...sameCategory, ...rest].slice(0, limit);
}

export function formatPostDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}
