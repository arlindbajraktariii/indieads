import Link from "next/link";
import { ArrowLeft, BookOpen, Compass } from "lucide-react";
import { Nav } from "@/components/landing/nav";
import { SiteFooter } from "@/components/landing/site-footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-page">
      <Nav />

      <main className="mx-auto flex min-h-[80vh] max-w-[760px] flex-col items-center justify-center px-5 pb-16 pt-[140px] text-center">
        <span className="hero-badge-pill">404</span>

        <h1 className="font-heading mt-6 text-[38px] leading-[1.05] tracking-[-0.04em] text-ink sm:text-[56px]">
          This page went missing.
        </h1>
        <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-muted sm:text-[18px]">
          The link may be outdated, or the page moved. Here are the two places
          most people are looking for.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-ink/20"
          >
            <BookOpen className="h-4 w-4 text-brand-500" />
            Read the blog
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:border-ink/20"
          >
            <Compass className="h-4 w-4 text-brand-500" />
            How it works
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
