import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Clock, Mail, MessageSquare, Users } from "lucide-react";
import { ContactForm } from "@/components/landing/contact-form";
import { InfoCard, PageShell } from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Questions about advertising, publishing or the waitlist? Send a message — a real person reads every one.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      kicker="Contact"
      title="Talk to us."
      description="Whether you want to advertise, publish, partner or tell us something is broken — this goes to a person, not a ticket robot."
      cta={false}
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        <ContactForm
          submitLabel="Send message"
          messagePlaceholder="What’s on your mind? Include a link if it helps."
          topics={[
            { value: "general", label: "General question" },
            { value: "advertiser", label: "Advertising on RoketAd" },
            { value: "publisher", label: "Publishing / monetization" },
            { value: "waitlist", label: "Waitlist or early access" },
            { value: "press", label: "Press or partnerships" },
            { value: "abuse", label: "Report an ad or publisher" },
          ]}
        />

        <div className="space-y-4">
          <InfoCard icon={Clock} title="Response time">
            Usually within two working days. If it’s about a live campaign, say so in
            the message and we’ll prioritize it.
          </InfoCard>
          <InfoCard icon={Mail} title="Waitlist questions">
            Already joined and want to change your email or leave the list? Send a
            note with the address you used and we’ll sort it out.
          </InfoCard>
          <InfoCard icon={Users} title="Publishers">
            Applying to monetize a site or newsletter? Use the dedicated{" "}
            <a
              href="/become-a-publisher"
              className="font-medium text-brand-500 hover:underline"
            >
              publisher application
            </a>{" "}
            so we get the details we need.
          </InfoCard>
          <InfoCard icon={MessageSquare} title="Feedback">
            Pre-launch feedback genuinely changes the roadmap. If something about the
            product or pricing doesn’t make sense, tell us now.
          </InfoCard>
        </div>
      </div>
    </PageShell>
  );
}
