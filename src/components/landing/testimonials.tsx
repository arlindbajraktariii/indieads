"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    company: "DeployBox",
    initials: "DB",
    quote:
      "We tried the usual paid channels and burned budget on clicks that never converted. RoketAd got us in front of actual builders — our first campaign paid for itself in signups within two weeks.",
    name: "Maya K.",
    role: "Founder, DeployBox",
  },
  {
    company: "Promptly",
    initials: "PR",
    quote:
      "The placements are shockingly relevant. Our AI writing tool showed up on the exact dev blogs our customers already read. CTR is 4x what we get from Google Display, at a fraction of the CPC.",
    name: "Tomás R.",
    role: "Growth, Promptly",
  },
  {
    company: "InvoiceKit",
    initials: "IK",
    quote:
      "As a solo founder I have no time for ad platforms that need a PhD. I set up a $60 campaign in ten minutes, and the dashboard shows me exactly where every dollar went.",
    name: "Sara L.",
    role: "Maker, InvoiceKit",
  },
  {
    company: "Changelog.fm",
    initials: "CF",
    quote:
      "We added the widget to our dev blog and revenue started within a day. The ads actually match our audience, so it never feels spammy — that mattered to us.",
    name: "Devon P.",
    role: "Publisher, Changelog.fm",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <div className="mx-auto max-w-[900px]">
      <div className="card-dark relative p-8 sm:p-12">
        <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-[15px] font-bold text-white">
          {item.initials}
        </span>

        <p className="text-[18px] leading-relaxed text-white/85 sm:text-[20px]">
          &ldquo;{item.quote}&rdquo;
        </p>

        <div className="mt-8 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-[16px] font-semibold text-white">{item.name}</p>
            <p className="text-[14px] text-white/60">{item.role}</p>
          </div>
          <Link href="/register" className="link-arrow !text-[15px]">
            Read case study
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Arrows */}
        <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy-900 shadow-sm transition-colors hover:border-brand-500 hover:text-brand-500"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy-900 shadow-sm transition-colors hover:border-brand-500 hover:text-brand-500"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Company dots */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.company}
            type="button"
            onClick={() => setIndex(i)}
            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
              i === index
                ? "border-brand-500 bg-brand-50 text-brand-600"
                : "border-white/10 bg-white/[0.04] text-white/60 hover:text-white"
            }`}
          >
            {t.company}
          </button>
        ))}
      </div>
    </div>
  );
}
