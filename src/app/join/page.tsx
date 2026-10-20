import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Check, Clock, Mail, Sparkles } from "lucide-react";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import {
  InfoCard,
  PageSection,
  PageShell,
  StepList,
} from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Join the waitlist",
  description:
    "Get early access to RoketAd, launch updates and founding-advertiser pricing. No spam — one email when we open.",
  path: "/join",
});

const steps = [
  {
    title: "Add your email",
    body: "One field, no questionnaire. You’ll get a confirmation with your spot in line.",
  },
  {
    title: "Get launch updates",
    body: "A short email when the advertiser dashboard opens, plus anything important that changes along the way.",
  },
  {
    title: "Launch your first campaign",
    body: "Waitlist members get access first, including early pricing and the chance to shape what we build next.",
  },
];

export default function JoinPage() {
  return (
    <PageShell
      kicker="Early access"
      title="Join the RoketAd waitlist."
      description="Be first in line when the network opens. Early members get access before public launch, plus founding-advertiser pricing."
      cta={false}
      heroExtra={<WaitlistForm variant="hero" />}
    >
      <div className="mb-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-ink/55">
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5 text-brand-500" strokeWidth={3} />
          Free during early access
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5 text-brand-500" strokeWidth={3} />
          No credit card
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5 text-brand-500" strokeWidth={3} />
          Unsubscribe anytime
        </span>
      </div>

      <PageSection title="What happens after you join">
        <StepList steps={steps} />
      </PageSection>

      <PageSection title="Why join early">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard icon={Sparkles} title="Founding pricing">
            Early advertisers get access to launch pricing before it’s public — and a
            say in how the platform is shaped.
          </InfoCard>
          <InfoCard icon={Clock} title="First access">
            The dashboard opens to the waitlist first. No public queue, no scramble
            for the first placements.
          </InfoCard>
          <InfoCard icon={Mail} title="Only useful email">
            Launch updates and early access. No drip campaign, no “just following
            up” sequences.
          </InfoCard>
        </div>
      </PageSection>
    </PageShell>
  );
}
