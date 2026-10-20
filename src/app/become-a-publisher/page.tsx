import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BarChart3, HandCoins, ShieldCheck, Sliders } from "lucide-react";
import { ContactForm } from "@/components/landing/contact-form";
import {
  InfoCard,
  PageSection,
  PageShell,
} from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Become a publisher",
  description:
    "Apply to monetize your website, newsletter, blog or community with relevant ads from indie tech products. You keep control of what appears.",
  path: "/become-a-publisher",
});

export default function BecomeAPublisherPage() {
  return (
    <PageShell
      kicker="Publishers"
      title="Become an RoketAd publisher."
      description="If your audience builds software, RoketAd can turn some of that attention into revenue — with relevant, clearly labelled placements and controls you actually use."
      cta={false}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <InfoCard icon={Sliders} title="You approve the ads">
          Choose categories, block advertisers and decide which formats appear on
          your property.
        </InfoCard>
        <InfoCard icon={ShieldCheck} title="Curated campaigns">
          Every advertiser is reviewed against our guidelines before a campaign can
          reach your readers.
        </InfoCard>
        <InfoCard icon={BarChart3} title="Honest reporting">
          Impressions, clicks, CTR and earnings per placement — updated as traffic
          comes in.
        </InfoCard>
        <InfoCard icon={HandCoins} title="Monthly payouts">
          A clear dashboard, a published revenue share and payouts on a monthly
          schedule.
        </InfoCard>
      </div>

      <PageSection
        title="Apply to join the network"
        intro="Tell us about your property. We review every application manually and reply either way."
      >
        <ContactForm
          defaultTopic="publisher"
          submitLabel="Submit application"
          showSite
          messagePlaceholder="What do you publish? Who reads it? Roughly how big is the audience, and where would you place ads?"
          topics={[
            { value: "publisher", label: "Publisher application" },
            { value: "publisher-question", label: "Question about publishing" },
          ]}
        />
      </PageSection>

      <PageSection title="What happens next">
        <ol className="space-y-3">
          {[
            "We review your property for quality, relevance and fit with the network.",
            "If it’s a match, we send you access to the publisher dashboard and the placement snippet.",
            "You choose where ads appear and which categories are allowed.",
            "Your first placements go live, and earnings start showing up in your dashboard.",
          ].map((step, i) => (
            <li
              key={step}
              className="flex gap-4 rounded-2xl border border-line bg-white p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-[13px] font-semibold text-white">
                {i + 1}
              </span>
              <p className="text-[15px] leading-relaxed text-muted">{step}</p>
            </li>
          ))}
        </ol>
      </PageSection>
    </PageShell>
  );
}
