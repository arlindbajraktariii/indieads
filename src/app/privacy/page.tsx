import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageSection, PageShell, Prose } from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "What RoketAd collects, why we collect it, where it is stored and how to have it removed.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell
      kicker="Legal"
      title="Privacy Policy"
      description="A plain-language summary of what we collect and what we do with it. Last updated October 2026."
      cta={false}
    >
      <PageSection title="What we collect">
        <Prose>
          <p>
            <strong>Waitlist.</strong> When you join the waitlist we store the email
            address you submit, along with the date you joined.
          </p>
          <p>
            <strong>Contact and publisher applications.</strong> When you use a contact
            or application form we store your name, email, the topic you selected, any
            website you provide and the message itself.
          </p>
          <p>
            <strong>Basic technical data.</strong> Our hosting and database providers
            may process standard request logs (such as IP address, browser type and
            timestamps) to deliver the site and protect it from abuse.
          </p>
          <p>
            We do not buy contact lists, and we do not collect payment information
            while the product is pre-launch.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="Why we collect it">
        <Prose>
          <ul>
            <li>To send launch updates and early-access information you asked for.</li>
            <li>To reply to messages and review publisher applications.</li>
            <li>To keep the service secure and understand basic usage.</li>
          </ul>
          <p>
            We do not sell your personal data, and we do not share it with advertisers
            or publishers.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="Where it is stored">
        <Prose>
          <p>
            Waitlist and contact submissions are stored in a LibertyDB-compatible
            (LibSQL) database hosted on bunny.net, and the site itself is served from
            bunny.net’s edge network. Access is limited to the people operating
            RoketAd.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="How long we keep it">
        <Prose>
          <p>
            We keep waitlist emails until the list is no longer needed or you ask to be
            removed. Contact messages are kept for as long as needed to handle the
            request and any follow-up. You can ask us to delete your data at any time.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="Your choices">
        <Prose>
          <p>
            Every email we send includes a way to unsubscribe. You can also ask us to
            access, correct or delete the information we hold about you by using the{" "}
            <Link href="/contact">contact form</Link>.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="Cookies">
        <Prose>
          <p>
            The pre-launch site uses only what is necessary to function. If we add
            analytics or advertising cookies later, we’ll update this page and ask for
            consent where required.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="Changes">
        <Prose>
          <p>
            If this policy changes in a meaningful way, we’ll update the date at the
            top and — for anyone on the waitlist — mention it in the next email we
            send.
          </p>
        </Prose>
      </PageSection>
    </PageShell>
  );
}
