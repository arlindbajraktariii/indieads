import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  MousePointerClick,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

const chips = [
  { icon: Megaphone, pos: "left-[8%] top-[22%]" },
  { icon: Target, pos: "left-[15%] top-[60%]" },
  { icon: MousePointerClick, pos: "right-[9%] top-[19%]" },
  { icon: BarChart3, pos: "right-[16%] top-[57%]" },
];

const sparkles = [
  { left: "26%", top: "16%", size: 5, opacity: 0.9 },
  { left: "31%", top: "28%", size: 3, opacity: 0.7 },
  { left: "38%", top: "11%", size: 4, opacity: 0.8 },
  { left: "44%", top: "24%", size: 3, opacity: 0.6 },
  { left: "57%", top: "13%", size: 4, opacity: 0.75 },
  { left: "63%", top: "27%", size: 3, opacity: 0.6 },
  { left: "71%", top: "17%", size: 5, opacity: 0.85 },
  { left: "35%", top: "40%", size: 3, opacity: 0.5 },
  { left: "66%", top: "38%", size: 3, opacity: 0.5 },
];

export function FinalCta() {
  return (
    <section className="px-4 pb-16 pt-4 sm:pb-20">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[36px] border border-[#f6ded2] bg-[linear-gradient(180deg,#fff7f2_0%,#ffe9de_100%)] px-6 pb-20 pt-16 text-center sm:rounded-[48px] sm:px-12 sm:pb-24 sm:pt-20">
        {/* Soft corner glows */}
        <div className="pointer-events-none absolute -bottom-40 -left-36 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,#ffd2be_0%,rgba(255,210,190,0)_70%)]" />
        <div className="pointer-events-none absolute -bottom-44 -right-36 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,#ffd2be_0%,rgba(255,210,190,0)_70%)]" />

        {/* Sparkle dots */}
        <div
          className="pointer-events-none absolute inset-0 hidden xl:block"
          aria-hidden="true"
        >
          {sparkles.map((dot, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.size,
                height: dot.size,
                opacity: dot.opacity,
              }}
            />
          ))}
        </div>

        {/* Floating icon chips */}
        {chips.map(({ icon: Icon, pos }, i) => (
          <span
            key={i}
            className={`absolute hidden h-[62px] w-[62px] items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_18px_40px_-22px_rgba(32,30,31,0.35)] xl:flex ${pos}`}
          >
            <Icon className="h-6 w-6 text-ink/70" strokeWidth={1.75} />
          </span>
        ))}

        {/* Center icon tile */}
        <div className="relative mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-[24px] border border-white bg-white/80 shadow-[0_20px_44px_-26px_rgba(244,64,0,0.5)]">
          <Rocket className="h-9 w-9 text-brand-500" strokeWidth={1.75} />
        </div>

        <div className="relative mt-7">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f3d6c7] bg-white/70 px-4 py-1.5 text-[13px] font-medium text-ink/70">
            <Sparkles className="h-3.5 w-3.5 text-brand-500" />
            Built for indie hackers
          </span>
        </div>

        <h2 className="font-heading relative mx-auto mt-6 max-w-[780px] text-[34px] leading-[1.06] tracking-[-0.04em] text-ink sm:text-[52px] lg:text-[64px]">
          You built the product.
          <br className="hidden sm:block" /> Now get people to see it.
        </h2>

        <p className="relative mx-auto mt-5 max-w-[540px] text-[16px] leading-relaxed text-ink/60 sm:text-[19px]">
          Join the waitlist and be first in line when RoketAd opens.
        </p>

        <div className="relative mt-8 flex justify-center">
          <Link
            href="/join"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-4 text-[16px] font-semibold text-white shadow-[0_22px_44px_-22px_rgba(244,64,0,0.85)] transition-colors hover:bg-brand-600 sm:w-auto"
          >
            Join the RoketAd waitlist
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="relative mt-5 text-[13px] text-ink/45">
          For advertisers and publishers · Free during early access
        </p>
      </div>
    </section>
  );
}
