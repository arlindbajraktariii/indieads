import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageSection, PageShell, Prose } from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Terms and conditions",
  description:
    "The terms that apply to using the RoketAd website, joining the waitlist and taking part in early access.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell
      kicker="Legal"
      title="Terms and Conditions"
      description="The rules for using this site and taking part in early access. Last updated October 2026."
      cta={false}
    >
      <PageSection title="1. Using this site">
        <Prose>
          <p>
            This website is operated by RoketAd. By using it, you agree to these terms.
            If you don’t agree with them, please don’t use the site.
          </p>
          <p>
            We may update these terms as the product develops. The version published
            here applies from the date shown above.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="2. Pre-launch and early access">
        <Prose>
          <p>
            RoketAd is currently pre-launch. Joining the waitlist does not create a
            paid contract, guarantee access on a particular date, or guarantee that any
            specific feature will be available.
          </p>
          <p>
            Early access may be offered in stages. We may invite users in batches, and
            we may change or withdraw features while the platform is being developed.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="3. Advertising">
        <Prose>
          <p>
            Campaigns are subject to our{" "}
            <Link href="/ad-guidelines">advertising guidelines</Link>. We may review,
            pause or reject a campaign that doesn’t meet them.
          </p>
          <p>
            Pricing, billing, refunds and delivery terms will be published before
            anyone is charged for a campaign. No advertising platform can guarantee
            customers, sales or a particular conversion rate.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="4. Publishers">
        <Prose>
          <p>
            Publishers must have the right to monetize the property they apply with,
            and must not encourage clicks or hide the sponsored label. Revenue share
            and payout terms will be provided to approved publishers before placements
            go live.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="5. Acceptable use">
        <Prose>
          <ul>
            <li>Don’t attempt to disrupt or reverse-engineer the site or network.</li>
            <li>Don’t submit other people’s data without permission.</li>
            <li>Don’t use the network for unlawful, deceptive or harmful activity.</li>
            <li>Don’t scrape, resell or misrepresent RoketAd content as your own.</li>
          </ul>
        </Prose>
      </PageSection>

      <PageSection title="6. Intellectual property">
        <Prose>
          <p>
            The RoketAd name, logo, site design and written content belong to RoketAd.
            Product names and logos you submit remain yours; you grant us permission to
            use them only as needed to run your campaign or listing.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="7. Availability and disclaimers">
        <Prose>
          <p>
            The site is provided “as is”. We work to keep it available and accurate,
            but we don’t promise uninterrupted access or that every piece of
            information is complete.
          </p>
          <p>
            To the extent permitted by law, RoketAd is not liable for indirect or
            consequential losses arising from use of this site or reliance on its
            content.
          </p>
        </Prose>
      </PageSection>

      <PageSection title="8. Contact">
        <Prose>
          <p>
            Questions about these terms? Use the{" "}
            <Link href="/contact">contact form</Link> and we’ll reply.
          </p>
        </Prose>
      </PageSection>
    </PageShell>
  );
}
