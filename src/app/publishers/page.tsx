import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Eye,
  HandCoins,
  ShieldCheck,
  Sliders,
} from "lucide-react";
import {
  InfoCard,
  PageSection,
  PageShell,
  StepList,
} from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Publishers",
  description:
    "Monetize your website, newsletter, blog or community with relevant ads from indie tech products. You keep control of what appears on your site.",
  path: "/publishers",
});

const steps = [
  {
    title: "Apply",
    body: "Tell us about your site, product or newsletter and the audience it serves. A few sentences is enough — we read every application.",
  },
  {
    title: "Get approved",
    body: "We review the property for quality, traffic relevance and fit with the network. Approved publishers get access to the dashboard.",
  },
  {
    title: "Add your placements",
    body: "Drop the RoketAd widget where you want ads to appear, or choose the formats that fit your layout. Two lines of code.",
  },
  {
    title: "Get paid",
    body: "Track impressions, clicks and earnings in your dashboard. Earnings are paid out on a monthly schedule once you pass the payout threshold.",
  },
];

export default function PublishersPage() {
  return (
    <PageShell
      kicker="For publishers"
      title="Turn your audience into another revenue stream."
      description="If you run a site, newsletter, blog or community for people who build software, RoketAd lets you earn from relevant placements — without handing your readers over to a generic ad network."
    >
      <PageSection title="How publishing works">
        <StepList steps={steps} />
      </PageSection>

      <PageSection
        title="You stay in control"
        intro="Your audience is the product. The network is built so you never have to choose between revenue and trust."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Sliders} title="Approve what runs">
            You decide which categories and advertisers are a fit. Nothing appears on
            your property that you haven’t allowed.
          </InfoCard>
          <InfoCard icon={ShieldCheck} title="Curated campaigns">
            Every campaign is reviewed against our guidelines. Spam, misleading
            claims and low-quality destinations get rejected before they reach you.
          </InfoCard>
          <InfoCard icon={Eye} title="Transparent reporting">
            Impressions, clicks, CTR and earnings per placement, updated as your
            traffic comes in.
          </InfoCard>
          <InfoCard icon={HandCoins} title="Simple payouts">
            No invoices to chase and no complicated revenue-share math. Your
            dashboard shows what you earned and when it’s paid.
          </InfoCard>
        </div>
      </PageSection>

      <PageSection
        title="Who we’re looking for"
        intro="Properties with an audience that fits the indie tech ecosystem, and a little room to show a relevant product."
      >
        <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <ul className="grid gap-3 text-[15px] text-ink/75 sm:grid-cols-2">
            {[
              "Developer blogs and technical publications",
              "SaaS products with an in-app audience",
              "Newsletters for founders and developers",
              "Communities and forums",
              "Tool and startup directories",
              "Educational sites for builders",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/become-a-publisher"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Apply as a publisher
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-white"
            >
              Publisher FAQ
            </Link>
          </div>
        </div>
      </PageSection>
    </PageShell>
  );
}
