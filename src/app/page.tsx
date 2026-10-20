import Link from "next/link";
import { ArrowRight, BarChart3, Check, ChevronRight, SlidersHorizontal, Target } from "lucide-react";
import { Nav } from "@/components/landing/nav";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { Faq } from "@/components/landing/faq";
import { Showcase, type ShowcaseTab } from "@/components/landing/showcase";
import { FinalCta } from "@/components/landing/final-cta";
import { SiteFooter } from "@/components/landing/site-footer";
import { HeroRotator } from "@/components/landing/hero-rotator";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const painPoints = [
  {
    title: "You post on X.",
    text: "Nobody clicks.",
    mock: "x",
  },
  {
    title: "You post on Reddit.",
    text: "Your post gets buried.",
    mock: "reddit",
  },
  {
    title: "You submit to directories.",
    text: "Nothing happens.",
    mock: "directories",
  },
  {
    title: "You run Google Ads.",
    text: "You spend €200 before learning anything.",
    mock: "ads",
  },
] as const;

const audienceFlow = [
  "SaaS founders",
  "Developers",
  "Indie hackers",
  "Early adopters",
];

const steps = [
  {
    number: "01",
    title: "Create your campaign",
    text: "Choose your budget, destination and campaign type.",
  },
  {
    number: "02",
    title: "Pick your audience",
    text: "Target categories like SaaS, AI, DevTools, Productivity, Marketing and Startups.",
  },
  {
    number: "03",
    title: "Get discovered",
    text: "Your ad appears across participating websites and products in the RoketAd network.",
  },
  {
    number: "04",
    title: "Track results",
    text: "See impressions, clicks, CTR and campaign performance.",
  },
];

const advertiserOutcomes = [
  "Launch your SaaS.",
  "Get traffic.",
  "Find your first customers.",
];

const publisherCards = [
  {
    title: "You control what's shown",
    text: "Approve advertisers, block categories and decide exactly where ads appear on your site.",
    mock: "control",
  },
  {
    title: "Relevant placements only",
    text: "SaaS, AI and developer products that fit your audience — never random banner noise.",
    mock: "placements",
  },
  {
    title: "Track what you earn",
    text: "Impressions, clicks and revenue per placement in a dashboard you can actually read.",
    mock: "analytics",
  },
];

const comparison = [
  { label: "Built for SaaS founders", traditional: "❌", indie: "✅" },
  { label: "Indie hacker audience", traditional: "❌", indie: "✅" },
  { label: "Simple campaign setup", traditional: "😐", indie: "✅" },
  { label: "Small budgets", traditional: "😐", indie: "✅" },
  { label: "SaaS / DevTools focused", traditional: "❌", indie: "✅" },
  { label: "Founder-friendly", traditional: "😐", indie: "❤️" },
];

const solutionCards = [
  {
    title: "Reach the right people",
    text: "Your ad appears across participating websites and products in the RoketAd network.",
    mock: "audience" as const,
  },
  {
    title: "Pick your audience",
    text: "Target categories like SaaS, AI, DevTools, Productivity, Marketing and Startups.",
    mock: "targeting" as const,
  },
  {
    title: "Track results",
    text: "See impressions, clicks, CTR and campaign performance in one simple dashboard.",
    mock: "analytics" as const,
  },
];

const featureTabs: ShowcaseTab[] = [
  {
    label: "Reach",
    cards: [
      {
        title: "Relevant audience",
        text: "Reach people interested in SaaS, AI, startups and developer tools.",
        mock: "audience",
      },
      {
        title: "Indie ecosystem",
        text: "A network made specifically for independent builders, not generic eyeballs.",
        mock: "network",
      },
      {
        title: "Real placements",
        text: "Indie blogs, dev docs, directories and founder newsletters — in front of people who buy.",
        mock: "placements",
      },
    ],
  },
  {
    label: "Launch",
    cards: [
      {
        title: "Simple campaigns",
        text: "Create and launch without learning a complicated advertising platform.",
        mock: "campaign",
      },
      {
        title: "Founder-friendly",
        text: "Start small and scale when something works. No contracts, no minimums.",
        mock: "budget",
      },
      {
        title: "No agency needed",
        text: "Write your copy, add a logo and go live — no agency, no ad ops team.",
        mock: "creative",
      },
    ],
  },
  {
    label: "Measure",
    cards: [
      {
        title: "Transparent analytics",
        text: "Know exactly how your campaigns are performing, down to the placement.",
        mock: "analytics",
      },
      {
        title: "Campaign control",
        text: "Pause, adjust or scale your budget whenever you want from your dashboard.",
        mock: "control",
      },
      {
        title: "Publisher-first",
        text: "Publishers approve every advertiser, so ads stay relevant to their audience.",
        mock: "placements",
      },
    ],
  },
];

const advCards = [
  {
    title: "Write your ad",
    text: "Add your logo, a headline and a destination link. Two minutes, not two weeks.",
    mock: "creative" as const,
  },
  {
    title: "Set your budget",
    text: "Choose a budget that fits your launch — start at the price of a few coffees.",
    mock: "campaign" as const,
  },
  {
    title: "Watch it work",
    text: "Get traffic, find your first customers and scale what performs.",
    mock: "analytics" as const,
  },
];

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function SectionIntro({
  title,
  subtitle,
  dark = false,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-[880px] text-center">
      <h2
        className={`font-heading text-[32px] leading-[1.08] sm:text-[50px] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-5 max-w-[660px] text-[16px] leading-relaxed sm:text-[17px] ${
            dark ? "text-white/65" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

const heroCards = [
  {
    icon: Target,
    title: "Reach the right people",
    text: "Your ad appears on indie tech sites, newsletters and products — not the general internet.",
  },
  {
    icon: SlidersHorizontal,
    title: "Launch in minutes",
    text: "A headline, a destination link and a budget. No ad manager and no agency.",
  },
  {
    icon: BarChart3,
    title: "See what actually works",
    text: "Impressions, clicks and CTR in one clean dashboard you can read in seconds.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Warm glow behind the headline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(55%_60%_at_50%_0%,#ffe7dc_0%,rgba(255,255,255,0)_75%)]" />

      <div className="relative mx-auto max-w-[1200px] px-5 pb-24 pt-[132px] sm:pb-28 sm:pt-[148px]">
        <div className="mx-auto max-w-[900px] text-center">
          <Link
            href="/join"
            className="hero-badge-pill transition-colors hover:border-ink/25"
          >
            A different kind of ad network
            <ChevronRight className="h-3.5 w-3.5 text-ink/40" />
          </Link>

          <h1 className="font-heading mt-7 text-[30px] leading-[1.06] tracking-[-0.04em] text-ink sm:text-[46px] lg:text-[64px]">
            The smarter way to reach
            <br className="hidden sm:block" /> <HeroRotator />
          </h1>

          <p className="mx-auto mt-7 max-w-[700px] text-[16px] leading-[1.55] text-ink/70 sm:mt-8 sm:text-[20px]">
            Say goodbye to wasted ad spend and complicated platforms. RoketAd puts
            your product in front of indie hackers, founders and developers.
          </p>

          <div className="mt-8 sm:mt-9">
            <WaitlistForm variant="hero" />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-ink/55">
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
              Cancel anytime
            </span>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-[880px] gap-3 sm:mt-14 sm:grid-cols-3">
          {heroCards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white/80 p-4 text-left shadow-[0_18px_40px_-34px_rgba(32,30,31,0.5)] backdrop-blur sm:block sm:p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[15px] font-semibold text-ink">{title}</p>
                <p className="mt-1 hidden text-[13.5px] leading-relaxed text-muted sm:block">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="scroll-mt-24 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro
          title="Getting users is harder than building the product."
          subtitle="You spent weeks building your SaaS. You launched. Then… 0 users. You post on X, Reddit and directories — and burn budget on ads — before learning anything."
        />

        <Showcase
          showCta={false}
          columns={4}
          tabs={[{ label: "The problem", cards: [...painPoints] }]}
        />

        <p className="mx-auto mt-14 max-w-[640px] text-center text-[18px] font-medium text-ink sm:text-[19px]">
          There should be a simpler way to reach the indie hacker audience.
        </p>
      </div>
    </section>
  );
}

const brokenChannels = [
  { label: "Posting on X", pos: "left-[3%] top-[9%] -rotate-6" },
  { label: "Reddit launches", pos: "right-[4%] top-[6%] rotate-3" },
  { label: "Directory submissions", pos: "left-[5%] top-[38%] rotate-2" },
  { label: "Google Ads", pos: "right-[3%] top-[35%] -rotate-3" },
];

function SolutionSection() {
  return (
    <section id="solution" className="scroll-mt-24 px-4 py-16 sm:py-24">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] border border-[#f6ded2] bg-[linear-gradient(180deg,#fff8f4_0%,#ffe9de_100%)] px-4 py-14 sm:rounded-[40px] sm:px-10 sm:py-16">
        {/* Soft light behind the heading */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_70%_at_50%_0%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_75%)]" />

        {/* The problem, fading out behind the fix */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
        >
          {brokenChannels.map((channel) => (
            <span
              key={channel.label}
              className={`absolute rounded-full border border-[#eccdbc] bg-white/40 px-4 py-2 text-[13px] font-medium text-ink/30 line-through ${channel.pos}`}
            >
              {channel.label}
            </span>
          ))}
        </div>

        <div className="relative">
          <p className="kicker text-center text-brand-500">The fix</p>

          <div className="mt-4">
            <SectionIntro
              title="Meet RoketAd."
              subtitle="A focused advertising network built around the indie hacker ecosystem. Instead of competing with millions of advertisers, advertise where your customers already hang out."
            />
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {audienceFlow.map((item, i) => (
              <div key={item} className="flex flex-col items-center gap-3 sm:flex-row">
                <span className="rounded-full border border-line bg-white px-5 py-2.5 text-[14px] font-medium text-ink shadow-[0_10px_24px_-20px_rgba(32,30,31,0.4)]">
                  {item}
                </span>
                {i < audienceFlow.length - 1 && (
                  <ArrowRight className="h-4 w-4 rotate-90 text-brand-500 sm:rotate-0" />
                )}
              </div>
            ))}
          </div>

          <Showcase tabs={[{ label: "The solution", cards: solutionCards }]} />
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="kicker text-brand-500">How it works</p>
          <h2 className="font-heading mt-4 text-[34px] tracking-tight text-ink sm:text-[50px]">
            Launch your ad in minutes.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="card-light p-6">
              <span className="text-[13px] font-semibold tracking-widest text-brand-500">
                {step.number}
              </span>
              <h3 className="mt-4 text-[18px] font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[15px] text-muted">
          No complicated setup.
        </p>
      </div>
    </section>
  );
}

function AdvertisersSection() {
  return (
    <section id="advertisers" className="scroll-mt-24 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro
          title="Built for founders who don't have a marketing team."
          subtitle="You don't need an agency. You don't need to learn Meta Ads. You don't need a $5,000 marketing budget. Just have something worth promoting."
        />

        <Showcase tabs={[{ label: "For advertisers", cards: advCards }]} />

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {advertiserOutcomes.map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-[17px] font-medium text-ink"
            >
              <Check className="h-4 w-4 text-brand-500" strokeWidth={3} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PublishersSection() {
  return (
    <section id="publishers" className="scroll-mt-24 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro
          title="Have an audience? Turn your website traffic into revenue."
          subtitle="Add RoketAd to your website and earn from relevant SaaS, AI and developer products — without handing your readers over to a generic ad network."
        />

        <Showcase
          showCta={false}
          tabs={[{ label: "For publishers", cards: publisherCards }]}
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link href="/become-a-publisher" className="btn-brand">
            Monetize your audience
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/publishers"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink/20"
          >
            Publisher details
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="why" className="scroll-mt-24 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro
          title="Advertising shouldn't feel like enterprise software."
          subtitle="Everything you need to reach indie hackers — and nothing you don't."
        />
        <Showcase tabs={featureTabs} />
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[900px]">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="kicker text-brand-500">The difference</p>
          <h2 className="font-heading mt-4 text-[34px] leading-tight tracking-tight text-ink sm:text-[50px]">
            You don&apos;t need another advertising platform.
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_40px_-28px_rgba(13,49,85,0.35)]">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-line bg-page/70">
                <th className="px-5 py-4 text-[12px] font-semibold uppercase tracking-wider text-muted">
                  What matters
                </th>
                <th className="px-4 py-4 text-center text-[12px] font-semibold uppercase tracking-wider text-muted">
                  Traditional Ads
                </th>
                <th className="bg-brand-50 px-4 py-4 text-center text-[12px] font-semibold uppercase tracking-wider text-brand-600">
                  RoketAd
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {comparison.map((row) => (
                <tr key={row.label}>
                  <td className="px-5 py-4 text-[15px] font-medium text-ink">
                    {row.label}
                  </td>
                  <td className="px-4 py-4 text-center text-[18px]">
                    {row.traditional}
                  </td>
                  <td className="bg-brand-50/60 px-4 py-4 text-center text-[18px]">
                    {row.indie}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[18px] font-semibold text-navy-900">
            Stop shouting into the internet.
          </p>
          <p className="mt-1 text-[17px] text-muted">
            Reach the right people instead.
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-[28px] border border-line bg-white px-6 py-12 text-center shadow-[0_18px_40px_-30px_rgba(13,49,85,0.3)] sm:px-12">
          <p className="kicker text-brand-500">Pricing</p>
          <h2 className="font-heading mt-4 text-[34px] tracking-tight text-ink sm:text-[46px]">
            Simple, transparent campaign pricing.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-muted">
            Designed for indie founders. Start small, prove the channel, then
            scale when something works.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              "No agency fees",
              "No complicated contracts",
              "Founder pricing at launch",
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-page px-4 py-2 text-[14px] font-medium text-ink"
              >
                <Check className="h-3.5 w-3.5 text-brand-500" strokeWidth={3} />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9">
            <Link href="/join" className="btn-brand">
              Join the Waitlist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[680px] pb-12 text-center">
          <p className="kicker text-brand-500">FAQ</p>
          <h2 className="font-heading mt-4 text-[34px] tracking-tight text-ink sm:text-[50px]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] text-muted">
            Everything you need to know about advertising and publishing on RoketAd.
          </p>
        </div>
        <Faq />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="min-h-screen bg-page">
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <AdvertisersSection />
        <PublishersSection />
        <WhySection />
        <ComparisonSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
