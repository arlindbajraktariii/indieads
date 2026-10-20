import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Compass, Layers, PenLine, Users } from "lucide-react";
import {
  InfoCard,
  PageSection,
  PageShell,
  Prose,
} from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "RoketAd is an advertising network for indie hackers, SaaS founders and developers. Built by people who know what launching without an audience feels like.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      kicker="About"
      title="Built for the people who build."
      description="RoketAd exists because the hardest part of launching a product isn’t shipping it — it’s getting the first people to notice."
    >
      <div className="mx-auto max-w-[760px]">
        <Prose>
          <p>
            Most advertising platforms are designed for companies with a marketing
            department, a media buyer and a budget that can absorb expensive
            mistakes. If you’re a solo founder shipping after work, that world is
            built for someone else.
          </p>
          <p>
            RoketAd takes the opposite approach: a small, focused network of
            independent tech sites, newsletters and products, read by people who
            actually try new software. You set a budget you can afford, write a
            couple of honest lines, and see exactly what happened.
          </p>
          <p>
            We’re building it in the open, with the first advertisers and publishers,
            rather than guessing what a generic “advertiser” wants. That’s why the
            waitlist exists — early members get access first and a real say in what
            gets built next.
          </p>
        </Prose>
      </div>

      <PageSection title="What we believe">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={Compass} title="Relevance beats reach">
            Ten thousand people who care about developer tools are worth more than a
            million who don’t.
          </InfoCard>
          <InfoCard icon={Users} title="Trust is the product">
            If readers stop trusting the placements, the network has nothing to sell.
            Curation is not a feature — it’s the point.
          </InfoCard>
          <InfoCard icon={Layers} title="Simple beats clever">
            A campaign you can set up in five minutes beats a dashboard with forty
            settings you’ll never use.
          </InfoCard>
          <InfoCard icon={PenLine} title="Honest numbers">
            No inflated metrics, no mystery traffic, no guarantees we can’t keep. You
            see what we see.
          </InfoCard>
        </div>
      </PageSection>

      <PageSection title="Where we are today">
        <Prose>
          <p>
            RoketAd is pre-launch. We’re building the initial advertiser and publisher
            network, reviewing early applications and shaping the dashboard with the
            people who join first.
          </p>
          <p>
            If that sounds like something you’d use — as an advertiser, a publisher,
            or both —{" "}
            <Link href="/join">join the waitlist</Link>. If you just want to tell us
            what we’re getting wrong,{" "}
            <Link href="/contact">we’d genuinely like to hear it</Link>.
          </p>
        </Prose>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/join"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-white"
          >
            Contact us
          </Link>
        </div>
      </PageSection>
    </PageShell>
  );
}
