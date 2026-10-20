import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageSection, PageShell, Prose } from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description:
    "RoketAd is free during early access. Self-serve campaigns, transparent reporting and no agency fees. Paid plans are announced to waitlist members first.",
  path: "/pricing",
});

const plans = [
  {
    name: "Starter",
    price: "Free",
    note: "during early access",
    description: "For testing your first campaign and learning what resonates.",
    features: [
      "Self-serve campaign setup",
      "Category targeting",
      "Live impressions, clicks and CTR",
      "Pause or stop anytime",
    ],
    cta: "Join the waitlist",
    href: "/join",
    highlight: true,
  },
  {
    name: "Growth",
    price: "Announced at launch",
    note: "waitlist members hear first",
    description: "For products with traction that want more reach and control.",
    features: [
      "Everything in Starter",
      "Multiple concurrent campaigns",
      "Priority placements",
      "Conversion tracking",
      "Priority support",
    ],
    cta: "Get launch updates",
    href: "/join",
    highlight: false,
  },
  {
    name: "Publisher",
    price: "Revenue share",
    note: "terms shared with applicants",
    description: "For sites, newsletters and communities in the ecosystem.",
    features: [
      "Native ad placements",
      "Advertiser and category controls",
      "Earnings dashboard",
      "Monthly payouts",
    ],
    cta: "Apply as a publisher",
    href: "/become-a-publisher",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <PageShell
      kicker="Pricing"
      title="Simple pricing, built for early-stage founders."
      description="No agency retainer. No setup fee. No annual contract. RoketAd is free during early access, and paid plans will be announced to waitlist members before public launch."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border bg-white p-6 ${
              plan.highlight
                ? "border-brand-500 shadow-[0_24px_60px_-40px_rgba(244,64,0,0.6)]"
                : "border-line"
            }`}
          >
            {plan.highlight ? (
              <span className="absolute -top-3 left-6 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Early access
              </span>
            ) : null}

            <h2 className="text-[18px] font-semibold tracking-tight text-ink">
              {plan.name}
            </h2>
            <p className="mt-4 text-[28px] font-bold leading-none tracking-tight text-ink">
              {plan.price}
            </p>
            <p className="mt-1.5 text-[13px] text-muted">{plan.note}</p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
              {plan.description}
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-[14.5px] text-ink/75"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                    strokeWidth={3}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={plan.href}
              className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition-colors ${
                plan.highlight
                  ? "bg-brand-500 text-white hover:bg-brand-600"
                  : "border border-line text-ink hover:bg-page"
              }`}
            >
              {plan.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <PageSection
        title="How pricing will work"
        intro="We’d rather be upfront about what we know today than publish numbers we might change tomorrow."
      >
        <Prose>
          <p>
            During early access, advertisers can run campaigns at no platform cost
            while we validate the network and the reporting. You set the budget; you
            only spend what you choose to spend.
          </p>
          <p>
            When paid plans open, pricing will be shared with waitlist members first
            and published on this page before anyone is charged. We’re designing it
            around small, predictable budgets rather than minimum monthly spends.
          </p>
          <ul>
            <li>No setup fees and no agency retainers.</li>
            <li>No annual contracts — pause or stop whenever you like.</li>
            <li>Publisher revenue share terms are shared before you join.</li>
            <li>Every advertiser sees a clear breakdown of spend and delivery.</li>
          </ul>
          <p>
            Questions about billing?{" "}
            <Link href="/contact">Talk to us</Link> — a real person answers.
          </p>
        </Prose>
      </PageSection>
    </PageShell>
  );
}
