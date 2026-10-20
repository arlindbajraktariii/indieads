import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Check, Minus, ShieldCheck, Target, Wallet } from "lucide-react";
import {
  InfoCard,
  PageSection,
  PageShell,
} from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Why RoketAd",
  description:
    "A focused ad network for indie hackers, SaaS founders and developers. See how RoketAd compares to general-purpose ad platforms.",
  path: "/why-roketad",
});

const comparison = [
  {
    label: "Audience",
    roketad: "Indie hackers, founders, developers, AI builders",
    other: "Everyone, everywhere",
  },
  {
    label: "Where ads run",
    roketad: "Curated indie tech sites, newsletters and products",
    other: "A general-purpose network",
  },
  {
    label: "Setup",
    roketad: "A headline, a URL and a budget — minutes",
    other: "Campaign manager, audiences, ad sets, pixels",
  },
  {
    label: "Minimum commitment",
    roketad: "Start small, stop anytime",
    other: "Often an ad-spend minimum or annual contract",
  },
  {
    label: "Who reviews ads",
    roketad: "Humans, against published guidelines",
    other: "Mostly automated",
  },
  {
    label: "Who it’s built for",
    roketad: "People shipping their own product",
    other: "Agencies and large advertisers first",
  },
];

export default function WhyRoketAdPage() {
  return (
    <PageShell
      kicker="Why RoketAd"
      title="A small network, on purpose."
      description="General ad platforms are built to serve every advertiser in the world. RoketAd is built for one kind of advertiser: the person shipping an indie product and trying to find the first thousand people who care."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <InfoCard icon={Target} title="Relevant by default">
          Your budget goes to places where people are already reading about software,
          startups and tools — not to a general audience that scrolls past.
        </InfoCard>
        <InfoCard icon={Wallet} title="Affordable to test">
          Small budgets are a first-class use case. Learn what converts before you
          commit real money.
        </InfoCard>
        <InfoCard icon={ShieldCheck} title="Curated, not maximal">
          We would rather run fewer, better ads than fill every slot. Campaigns and
          publishers are reviewed.
        </InfoCard>
      </div>

      <PageSection
        title="How it compares"
        intro="Not a knock on the big platforms — they’re excellent at what they’re built for. This is just a different job."
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-white">
          <div className="grid grid-cols-[1.1fr_1.4fr_1.2fr] gap-2 border-b border-line bg-[#fbfbf9] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted sm:px-6">
            <span />
            <span className="text-ink">RoketAd</span>
            <span>General ad platforms</span>
          </div>
          {comparison.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.1fr_1.4fr_1.2fr] items-start gap-2 px-4 py-4 text-[13.5px] leading-relaxed sm:px-6 sm:text-[14.5px] ${
                i !== comparison.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span className="font-medium text-ink/60">{row.label}</span>
              <span className="flex gap-2 text-ink">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  strokeWidth={3}
                />
                {row.roketad}
              </span>
              <span className="flex gap-2 text-muted">
                <Minus className="mt-0.5 h-4 w-4 shrink-0 text-ink/25" />
                {row.other}
              </span>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        title="What we won’t do"
        intro="A short list, because it matters as much as the features."
      >
        <ul className="space-y-3 rounded-2xl border border-line bg-white p-6 text-[15px] leading-relaxed text-muted sm:p-8">
          <li>
            We won’t guarantee customers, revenue or conversions — no honest ad
            network can.
          </li>
          <li>
            We won’t stuff every available slot with ads. A network people trust is
            worth more than a network that’s full.
          </li>
          <li>
            We won’t hide where your ads ran or how your budget was spent.
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/join"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-white"
          >
            See pricing
          </Link>
        </div>
      </PageSection>
    </PageShell>
  );
}
