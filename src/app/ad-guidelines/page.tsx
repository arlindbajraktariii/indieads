import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageSection, PageShell, Prose } from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Advertising guidelines",
  description:
    "What we accept on the RoketAd network, what we reject, and how campaigns are reviewed. Clear rules for advertisers and publishers.",
  path: "/ad-guidelines",
});

export default function AdGuidelinesPage() {
  return (
    <PageShell
      kicker="Policy"
      title="Advertising guidelines"
      description="The network is only as good as what runs on it. These rules keep RoketAd useful for readers, fair to publishers and worth the money for advertisers."
      cta={false}
    >
      <div className="space-y-0">
        <PageSection title="What we accept">
          <Prose>
            <p>
              We accept legitimate products and services that are genuinely relevant
              to the RoketAd audience. That includes:
            </p>
            <ul>
              <li>SaaS products, AI tools and developer tools</li>
              <li>Mobile and web apps, including browser extensions</li>
              <li>Developer services, agencies and consultancies</li>
              <li>Newsletters, communities and digital products</li>
              <li>Startup and technology products generally</li>
            </ul>
            <p>
              The product must be available to the public (or in a genuine beta),
              and the advertiser must be able to describe what it does honestly.
            </p>
          </Prose>
        </PageSection>

        <PageSection title="What we don’t accept">
          <Prose>
            <ul>
              <li>Malware, spyware, unwanted software or deceptive installers</li>
              <li>Get-rich-quick schemes, guaranteed-income claims or pyramid schemes</li>
              <li>Adult content, gambling and unlicensed financial products</li>
              <li>Crypto tokens, NFT drops and speculative investment offers</li>
              <li>Counterfeit goods, piracy or trademark infringement</li>
              <li>Products that harvest data without clear consent</li>
              <li>Misleading claims about results, users or endorsements</li>
              <li>Cloaking, redirect chains or destinations that differ from the ad</li>
              <li>Ads that impersonate a publisher’s editorial content</li>
            </ul>
            <p>
              We may reject a campaign for reasons not listed here when it would
              clearly damage the trust readers place in the network.
            </p>
          </Prose>
        </PageSection>

        <PageSection title="Creative requirements">
          <Prose>
            <ul>
              <li>Headlines and descriptions must accurately reflect the destination.</li>
              <li>No ALL CAPS shouting, excessive punctuation or fake urgency counters.</li>
              <li>No autoplaying audio or motion that interferes with reading.</li>
              <li>Ads must be clearly labelled as sponsored or promoted.</li>
              <li>Logos and product names must be yours to use.</li>
            </ul>
            <p>
              Our placements are native, which only works if they’re honest. An ad
              that tricks a click damages every advertiser on the network.
            </p>
          </Prose>
        </PageSection>

        <PageSection title="Landing page requirements">
          <Prose>
            <ul>
              <li>The destination must load quickly and work on mobile.</li>
              <li>It must clearly explain what the product is and who it’s for.</li>
              <li>Pricing, trials and subscription terms must be visible before checkout.</li>
              <li>No forced downloads, pop-up mazes or deceptive consent flows.</li>
              <li>A working privacy policy and contact method must be reachable.</li>
            </ul>
          </Prose>
        </PageSection>

        <PageSection title="How review works">
          <Prose>
            <p>
              Every campaign is reviewed by a human before it goes live. We check the
              product, the creative and the landing page. Most reviews happen within
              one working day.
            </p>
            <p>
              Campaigns can be paused while under review, or rejected with a short
              explanation and a path to resubmit. We may re-review a campaign at any
              time — particularly if the destination changes.
            </p>
          </Prose>
        </PageSection>

        <PageSection title="Enforcement">
          <Prose>
            <p>
              If a campaign breaks these rules, we can pause it, request changes or
              remove it from the network. Repeat or serious violations can lead to an
              account being closed.
            </p>
            <p>
              Where spend has already been delivered, it isn’t automatically refunded
              — but we’ll always explain what happened and why.
            </p>
          </Prose>
        </PageSection>

        <PageSection title="For publishers">
          <Prose>
            <p>
              Publishers are expected to place ads where readers can see and understand
              them, and must not encourage clicks or hide the sponsored label. You can
              block categories or individual advertisers from your dashboard.
            </p>
            <p>
              If you see an ad that shouldn’t be on the network, report it via the{" "}
              <Link href="/contact">contact form</Link> and we’ll review it.
            </p>
          </Prose>
        </PageSection>

        <PageSection title="Questions">
          <Prose>
            <p>
              Not sure whether your product is a fit? Ask before you build the
              campaign —{" "}
              <Link href="/contact">send us a note</Link> and we’ll tell you honestly.
            </p>
          </Prose>
        </PageSection>
      </div>
    </PageShell>
  );
}
