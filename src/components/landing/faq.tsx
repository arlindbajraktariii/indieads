"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  {
    q: "What is RoketAd?",
    a: (
      <>
        <p>
          RoketAd is an advertising network built specifically for indie hackers,
          SaaS founders, developers, AI builders, and startups. It helps product
          creators reach a highly relevant audience across websites and products
          within the independent tech ecosystem.
        </p>
        <p className="mt-3">
          Instead of trying to reach everyone, RoketAd focuses on connecting your
          product with people who are already interested in software, startups, AI,
          developer tools, and new products.
        </p>
      </>
    ),
  },
  {
    q: "Who is RoketAd for?",
    a: (
      <>
        <p>
          RoketAd is designed for founders and teams building products for the
          modern internet.
        </p>
        <p className="mt-3">You can use RoketAd to promote:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>SaaS products</li>
          <li>AI tools</li>
          <li>Developer tools</li>
          <li>Chrome extensions</li>
          <li>Mobile and web apps</li>
          <li>Startup products</li>
          <li>Developer services</li>
          <li>Newsletters and communities</li>
          <li>Digital products</li>
        </ul>
        <p className="mt-3">
          If you’re building something for developers, founders, creators, or tech
          enthusiasts, RoketAd is built for you.
        </p>
      </>
    ),
  },
  {
    q: "How does advertising on RoketAd work?",
    a: (
      <>
        <p>
          Create a campaign, choose your budget and destination URL, select the
          audience or categories that fit your product, and launch.
        </p>
        <p className="mt-3">
          Your campaign is then distributed across participating websites and
          products in the RoketAd network.
        </p>
        <p className="mt-3">
          You’ll be able to monitor important performance metrics such as
          impressions, clicks, CTR, and campaign performance from your dashboard.
        </p>
        <p className="mt-3 font-medium text-ink">
          Simple setup. Transparent results. No agency required.
        </p>
      </>
    ),
  },
  {
    q: "How is RoketAd different from Google Ads or Meta Ads?",
    a: (
      <>
        <p>
          Google and Meta are designed to serve almost every type of advertiser and
          audience.
        </p>
        <p className="mt-3">RoketAd takes a different approach.</p>
        <p className="mt-3">
          We’re building a focused network around indie hackers, SaaS, developers,
          startups, AI, and technology.
        </p>
        <p className="mt-3">
          That means your advertising budget isn’t competing for attention across an
          enormous general-purpose audience. Instead, you can promote your product in
          an environment specifically designed around the people most likely to
          discover and try new software.
        </p>
      </>
    ),
  },
  {
    q: "Do I need a large advertising budget?",
    a: (
      <>
        <p className="font-medium text-ink">No.</p>
        <p className="mt-3">
          RoketAd is designed with early-stage founders in mind, so you don’t need
          thousands of dollars to start experimenting with paid acquisition.
        </p>
        <p className="mt-3">
          Start with a small campaign, measure the results, learn what works, and
          increase your budget when you find a channel that converts.
        </p>
        <p className="mt-3 font-medium text-ink">Start small. Scale what works.</p>
      </>
    ),
  },
  {
    q: "Can I advertise my new SaaS before I have many users?",
    a: (
      <>
        <p className="font-medium text-ink">Absolutely.</p>
        <p className="mt-3">
          In fact, that’s one of the main reasons we’re building RoketAd.
        </p>
        <p className="mt-3">
          Getting the first users is often one of the hardest parts of launching a
          SaaS. RoketAd gives founders another way to put their product in front of a
          relevant audience without having to build a large audience first.
        </p>
      </>
    ),
  },
  {
    q: "What can I promote?",
    a: (
      <>
        <p>
          You can promote legitimate products and services that are relevant to the
          RoketAd audience.
        </p>
        <p className="mt-3">
          This includes SaaS products, AI tools, developer tools, startups, apps,
          newsletters, communities, and other technology products.
        </p>
        <p className="mt-3">
          All campaigns are subject to our advertising guidelines to keep the network
          useful and trustworthy for both advertisers and publishers.
        </p>
      </>
    ),
  },
  {
    q: "Can I become an RoketAd publisher?",
    a: (
      <>
        <p className="font-medium text-ink">Yes.</p>
        <p className="mt-3">
          If you run a website, SaaS product, blog, newsletter, community, or other
          digital property with an audience that fits the RoketAd ecosystem, you can
          apply to become a publisher.
        </p>
        <p className="mt-3">
          Publishers can monetize available advertising space while keeping control
          over what appears on their websites.
        </p>
        <p className="mt-3 font-medium text-ink">
          Turn your audience into another revenue stream.
        </p>
      </>
    ),
  },
  {
    q: "How do publishers get paid?",
    a: (
      <>
        <p>
          Publishers earn revenue when ads are displayed or interacted with,
          depending on the advertising format and campaign model.
        </p>
        <p className="mt-3">
          Your dashboard will provide visibility into impressions, clicks, earnings,
          and other relevant metrics.
        </p>
        <p className="mt-3">
          Our goal is to make monetization simple and transparent rather than forcing
          publishers through complicated advertising platforms.
        </p>
      </>
    ),
  },
  {
    q: "Do I have control over which ads appear on my website?",
    a: (
      <>
        <p className="font-medium text-ink">Yes.</p>
        <p className="mt-3">Publisher controls are an important part of RoketAd.</p>
        <p className="mt-3">
          You should be able to maintain the quality and relevance of the advertising
          shown to your audience. We also review campaigns and enforce advertising
          guidelines to help maintain a high-quality network.
        </p>
      </>
    ),
  },
  {
    q: "How do you prevent low-quality or spammy ads?",
    a: (
      <>
        <p>RoketAd is built around a curated technology ecosystem.</p>
        <p className="mt-3">
          We review campaigns against our advertising guidelines and can reject
          products, creatives, or destinations that don’t meet our quality standards.
        </p>
        <p className="mt-3">
          The goal isn’t to maximize the number of ads in the network.
        </p>
        <p className="mt-3 font-medium text-ink">
          The goal is to build a network people actually trust.
        </p>
      </>
    ),
  },
  {
    q: "When will RoketAd launch?",
    a: (
      <>
        <p>
          We’re currently building the initial advertiser and publisher network.
        </p>
        <p className="mt-3">
          Early users can join the waitlist to get launch updates, early access, and
          information about our initial pricing and availability.
        </p>
        <p className="mt-3">
          <Link
            href="/join"
            className="font-semibold text-brand-500 underline-offset-4 hover:underline"
          >
            Join early →
          </Link>
        </p>
      </>
    ),
  },
  {
    q: "Is there a free plan?",
    a: (
      <>
        <p>
          Our initial focus is on making the advertising experience simple and
          affordable for early-stage founders.
        </p>
        <p className="mt-3">
          Pricing and campaign options will be announced as we open the platform to
          early users.
        </p>
      </>
    ),
  },
  {
    q: "Can I cancel my campaign?",
    a: (
      <p>
        Yes. You remain in control of your campaigns and budget. Campaigns can be
        paused or stopped from your account, subject to the applicable campaign
        terms.
      </p>
    ),
  },
  {
    q: "Will RoketAd guarantee customers or sales?",
    a: (
      <>
        <p>
          No advertising platform can honestly guarantee customers, revenue, or
          conversions.
        </p>
        <p className="mt-3">
          RoketAd’s job is to help you reach a relevant audience and provide the tools
          to measure your campaigns.
        </p>
        <p className="mt-3">
          Your landing page, product, pricing, offer, and onboarding experience
          ultimately determine how that traffic converts.
        </p>
        <p className="mt-3 font-medium text-ink">
          We bring the audience. You build something worth trying.
        </p>
      </>
    ),
  },
  {
    q: "Why should I join the waitlist now?",
    a: (
      <>
        <p>
          Because we’re building the network with early advertisers and publishers.
        </p>
        <p className="mt-3">
          Joining early gives you the opportunity to get access before the network
          becomes crowded, provide feedback on the product, and potentially receive
          early-adopter benefits.
        </p>
        <p className="mt-3 font-medium text-ink">Be early. Build with us.</p>
        <p className="mt-3">
          <Link
            href="/join"
            className="font-semibold text-brand-500 underline-offset-4 hover:underline"
          >
            Join the RoketAd waitlist →
          </Link>
        </p>
      </>
    ),
  },
];

export function Faq() {
  const [open, setOpen] = useState<number[]>([0]);

  function toggle(i: number) {
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );
  }

  return (
    <div className="grid items-start gap-3 lg:grid-cols-2">
      {faqs.map((item, i) => {
        const isOpen = open.includes(i);
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
              isOpen ? "border-brand-100" : "border-line"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-[15.5px] font-semibold leading-snug text-ink">
                {item.q}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                  isOpen
                    ? "rotate-45 bg-brand-500 text-white"
                    : "bg-brand-50 text-brand-500"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-[14.5px] leading-relaxed text-muted">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
