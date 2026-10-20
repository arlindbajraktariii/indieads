import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Eye,
  ShieldCheck,
  Sliders,
  Wallet,
} from "lucide-react";
import {
  InfoCard,
  PageSection,
  PageShell,
  StepList,
} from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "How it works",
  description:
    "Create a campaign, pick your audience, set a budget and launch across the RoketAd network. Impressions, clicks and CTR in one dashboard.",
  path: "/how-it-works",
});

const steps = [
  {
    title: "Create your campaign",
    body: "Add your product name, a headline and the URL you want people to land on. No creative team and no ad manager required — a few lines are enough to launch.",
  },
  {
    title: "Pick your audience",
    body: "Choose the categories that match your buyers: SaaS, AI, developer tools, productivity, marketing, startups and more. Your ad only appears on properties in those categories.",
  },
  {
    title: "Set a budget you’re comfortable with",
    body: "Start small. Set a budget, change it whenever you like, and pause the campaign with one click. There are no long-term commitments.",
  },
  {
    title: "Launch and measure",
    body: "Your campaign is distributed across participating sites and products in the network. Watch impressions, clicks, CTR and performance live in your dashboard.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell
      kicker="How it works"
      title="From idea to first impressions in minutes."
      description="RoketAd is a self-serve ad network for indie products. No agency, no complicated ad manager — just a budget, an audience and a dashboard that tells you the truth."
    >
      <StepList steps={steps} />

      <PageSection
        title="What you get with every campaign"
        intro="The basics done properly, so you can spend your time on the product instead of the ad platform."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Eye} title="Transparent delivery">
            See where your ads actually ran. Every placement in the network is
            visible, along with impressions and clicks per site.
          </InfoCard>
          <InfoCard icon={BarChart3} title="Measurement built in">
            Impressions, clicks, CTR and spend in one place. Export the numbers or
            check them any time from your dashboard.
          </InfoCard>
          <InfoCard icon={ShieldCheck} title="Human-reviewed ads">
            Every campaign is checked against our guidelines before it goes live, so
            the network stays useful for readers and publishers.
          </InfoCard>
          <InfoCard icon={Sliders} title="Full control">
            Pause, edit or stop a campaign whenever you want. Change budgets and
            targeting without talking to an account manager.
          </InfoCard>
        </div>
      </PageSection>

      <PageSection
        title="Built to be boring on purpose"
        intro="You shouldn’t need a certification to buy your first ads. RoketAd keeps the setup short, the reporting honest and the spend predictable."
      >
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
            <li className="flex gap-3">
              <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              Start with a small budget — no minimum contract and no setup fee.
            </li>
            <li className="flex gap-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              No lock-in: pause or stop from your account at any time.
            </li>
            <li className="flex gap-3">
              <Eye className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              No hidden placements, no mystery traffic sources.
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Get early access
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/advertise"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-white"
            >
              What you can advertise
            </Link>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
