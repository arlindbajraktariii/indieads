import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  MousePointerClick,
  Sparkles,
  Target,
  Wallet,
} from "lucide-react";
import {
  InfoCard,
  PageSection,
  PageShell,
} from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Advertise",
  description:
    "Reach indie hackers, SaaS founders, developers and AI builders across the RoketAd network. Self-serve campaigns with transparent reporting.",
  path: "/advertise",
});

const formats = [
  {
    title: "Native placements",
    body: "Your product appears inside articles, directories and product pages on independent tech sites — clearly labelled, never disguised as editorial.",
  },
  {
    title: "Newsletter spots",
    body: "A short, readable mention in newsletters read by founders and developers, placed alongside content they already subscribe to.",
  },
  {
    title: "Directory listings",
    body: "Featured placement in curated tool and startup directories where people are actively browsing for something new.",
  },
];

const audience = [
  "SaaS founders and early-stage teams",
  "Indie hackers shipping side projects",
  "Developers and technical builders",
  "AI and no-code product creators",
  "Newsletter and community operators",
  "Early adopters looking for new tools",
];

export default function AdvertisePage() {
  return (
    <PageShell
      kicker="For advertisers"
      title="Put your product in front of people who ship."
      description="RoketAd is a focused ad network for indie products. Instead of competing for attention across the entire internet, you reach founders, developers and early adopters who are already looking for tools like yours."
    >
      <PageSection
        title="Why advertisers choose RoketAd"
        intro="A smaller, more relevant audience beats a huge, indifferent one — especially when your budget is your own money."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Target} title="Relevant by design">
            Your ad runs on sites and products inside the indie tech ecosystem, not
            on a general-purpose network where nobody is thinking about software.
          </InfoCard>
          <InfoCard icon={Wallet} title="Start small">
            Test a campaign with a budget you’re comfortable with, learn what
            converts, then scale the channels that work.
          </InfoCard>
          <InfoCard icon={BarChart3} title="Numbers you can trust">
            Impressions, clicks, CTR and spend, visible per placement. No vanity
            metrics and no mystery traffic.
          </InfoCard>
          <InfoCard icon={Sparkles} title="Simple creative">
            A headline, a short description and a destination URL. You don’t need a
            design team to get a campaign live.
          </InfoCard>
        </div>
      </PageSection>

      <PageSection
        title="Where your ads appear"
        intro="Placements are native to the properties in the network — they sit where readers already are, without interrupting what they came for."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {formats.map((format) => (
            <InfoCard key={format.title} title={format.title}>
              {format.body}
            </InfoCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        title="Who you can reach"
        intro="The network is built around people who build, launch and buy software for a living — or as a very serious hobby."
      >
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <ul className="grid gap-3 text-[15px] text-ink/75 sm:grid-cols-2">
            {audience.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <MousePointerClick className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-white"
            >
              See how campaigns work
            </Link>
          </div>
        </div>
      </PageSection>

      <PageSection
        title="What you can promote"
        intro="Legitimate products and services that are genuinely relevant to the audience. Campaigns go through review before they go live."
      >
        <p className="text-[15px] leading-relaxed text-muted">
          SaaS products, AI tools, developer tools, Chrome extensions, web and mobile
          apps, startup products, developer services, newsletters, communities and
          digital products. Read the full{" "}
          <Link href="/ad-guidelines" className="font-medium text-brand-500 hover:underline">
            advertising guidelines
          </Link>
          .
        </p>
      </PageSection>
    </PageShell>
  );
}
