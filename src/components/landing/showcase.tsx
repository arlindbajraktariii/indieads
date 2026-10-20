"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Mockups                                                             */
/* ------------------------------------------------------------------ */

function MockX() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-ink/85" />
        <div className="leading-tight">
          <p className="text-[12px] font-semibold text-ink">@buildinpublic</p>
          <p className="text-[10px] text-muted">2h</p>
        </div>
      </div>
      <p className="text-[12px] leading-relaxed text-ink">
        Just launched my SaaS 🚀 would love feedback from fellow builders…
      </p>
      <div className="flex gap-5 border-t border-line pt-3 text-[10.5px] text-muted">
        <span>0 replies</span>
        <span>0 reposts</span>
        <span>0 likes</span>
      </div>
    </div>
  );
}

function MockReddit() {
  return (
    <div className="space-y-3">
      <p className="text-[10.5px] text-muted">r/SaaS · u/founder · 3h</p>
      <p className="text-[12.5px] font-semibold leading-snug text-ink">
        I built a tool for indie founders — thoughts?
      </p>
      <div className="flex items-center gap-2 text-[10.5px] text-muted">
        <span className="rounded-full bg-[#f0f0ed] px-2 py-1">2 upvotes</span>
        <span>0 comments</span>
      </div>
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[10.5px] font-medium text-amber-700">
        Buried — position #412 in “new”
      </div>
    </div>
  );
}

function MockDirectories() {
  const rows = [
    { n: "Product Hunt", s: "Pending", c: "bg-amber-50 text-amber-700" },
    { n: "BetaList", s: "Not reviewed", c: "bg-[#f0f0ed] text-muted" },
    { n: "Peerlist", s: "Rejected", c: "bg-red-50 text-red-500" },
    { n: "Indie Hackers", s: "Waiting", c: "bg-[#f0f0ed] text-muted" },
  ];
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div
          key={r.n}
          className="flex items-center justify-between rounded-lg border border-line px-3 py-2"
        >
          <span className="text-[11.5px] font-medium text-ink">{r.n}</span>
          <span className={`rounded-full px-2 py-0.5 text-[9.5px] font-semibold ${r.c}`}>
            {r.s}
          </span>
        </div>
      ))}
    </div>
  );
}

function MockAds() {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between">
        <p className="text-[11.5px] font-semibold text-ink">Google Ads</p>
        <span className="rounded-full bg-red-50 px-2 py-0.5 text-[9.5px] font-semibold text-red-500">
          Paused
        </span>
      </div>
      <div>
        <div className="flex items-center justify-between text-[10.5px] text-muted">
          <span>Budget spent</span>
          <span>€200 / €200</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-line">
          <div className="h-full w-full rounded-full bg-red-400" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { l: "Clicks", v: "41", red: false },
          { l: "Signups", v: "0", red: true },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-line p-2.5">
            <p className="text-[10px] text-muted">{s.l}</p>
            <p
              className={`text-[15px] font-bold ${s.red ? "text-red-500" : "text-ink"}`}
            >
              {s.v}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockAudience() {
  const rows = [
    { n: "Founders", v: "82k" },
    { n: "Developers", v: "64k" },
    { n: "Indie hackers", v: "51k" },
    { n: "Early adopters", v: "43k" },
  ];
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div
          key={r.n}
          className="flex items-center justify-between rounded-lg border border-line px-3 py-2"
        >
          <span className="flex items-center gap-2 text-[11.5px] font-medium text-ink">
            <span className="h-6 w-6 rounded-full bg-ink/85" />
            {r.n}
          </span>
          <span className="font-mono text-[10.5px] text-muted">{r.v}</span>
        </div>
      ))}
    </div>
  );
}

function MockTargeting() {
  return (
    <div className="space-y-3">
      <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
        Target categories
      </p>
      <div className="flex flex-wrap gap-1.5">
        {["SaaS", "AI", "DevTools", "Productivity", "Marketing", "Startups"].map(
          (c, i) => (
            <span
              key={c}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                i < 4
                  ? "bg-ink text-white"
                  : "border border-line bg-white text-muted"
              }`}
            >
              {c}
            </span>
          ),
        )}
      </div>
      <div className="rounded-lg border border-line bg-[#fafaf8] px-3 py-2.5">
        <p className="text-[10px] text-muted">Estimated reach</p>
        <p className="text-[15px] font-bold text-ink">240,000 builders</p>
      </div>
    </div>
  );
}

function MockAnalytics() {
  const bars = [42, 58, 47, 66, 54, 78, 63, 88, 72, 95, 84, 100];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: "Impressions", v: "184k" },
          { l: "Clicks", v: "6.4k" },
          { l: "CTR", v: "3.48%" },
        ].map((s) => (
          <div key={s.l}>
            <p className="text-[9.5px] text-muted">{s.l}</p>
            <p className="text-[13px] font-bold text-ink">{s.v}</p>
          </div>
        ))}
      </div>
      <div className="flex h-[62px] items-end gap-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-[3px] ${
              i >= bars.length - 3 ? "bg-brand-500" : "bg-ink/12"
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function MockNetwork() {
  return (
    <div className="space-y-3">
      <p className="text-[11.5px] font-semibold text-ink">RoketAd network</p>
      {[
        "Indie blogs & dev docs",
        "SaaS directories",
        "Founder newsletters",
        "Developer forums",
      ].map((r) => (
        <div key={r} className="flex items-center gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-white">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className="text-[11.5px] text-ink">{r}</span>
        </div>
      ))}
    </div>
  );
}

function MockPlacements() {
  const rows = [
    { n: "hackernightly.dev", v: "48,210 imp" },
    { n: "shipweekly.co", v: "31,904 imp" },
    { n: "devtools.directory", v: "22,715 imp" },
  ];
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-muted">
        <span>Placement</span>
        <span>Reach</span>
      </div>
      {rows.map((r) => (
        <div
          key={r.n}
          className="flex items-center justify-between rounded-lg border border-line px-3 py-2"
        >
          <span className="font-mono text-[10.5px] text-ink">{r.n}</span>
          <span className="text-[10.5px] text-muted">{r.v}</span>
        </div>
      ))}
    </div>
  );
}

function MockCampaign() {
  return (
    <div className="space-y-2.5">
      <p className="text-[11.5px] font-semibold text-ink">New campaign</p>
      {[
        { l: "Budget", v: "$20" },
        { l: "Destination", v: "acme.dev/launch" },
        { l: "Type", v: "Native ad unit" },
      ].map((f) => (
        <div key={f.l}>
          <p className="text-[9.5px] text-muted">{f.l}</p>
          <div className="mt-1 rounded-lg border border-line bg-white px-3 py-2 text-[11.5px] text-ink">
            {f.v}
          </div>
        </div>
      ))}
      <div className="inline-flex rounded-lg bg-ink px-3 py-2 text-[11px] font-medium text-white">
        Launch campaign →
      </div>
    </div>
  );
}

function MockBudget() {
  const rows = [
    { n: "Starter", v: "$20", d: "5,000 impressions" },
    { n: "Growth", v: "$69", d: "25,000 impressions", active: true },
    { n: "Launch", v: "$199", d: "100,000 impressions" },
  ];
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div
          key={r.n}
          className={`flex items-center justify-between rounded-lg border px-3 py-2.5 ${
            r.active ? "border-ink bg-ink" : "border-line bg-white"
          }`}
        >
          <div>
            <p
              className={`text-[11.5px] font-semibold ${
                r.active ? "text-white" : "text-ink"
              }`}
            >
              {r.n}
            </p>
            <p className={`text-[9.5px] ${r.active ? "text-white/60" : "text-muted"}`}>
              {r.d}
            </p>
          </div>
          <p
            className={`text-[13px] font-bold ${
              r.active ? "text-white" : "text-ink"
            }`}
          >
            {r.v}
          </p>
        </div>
      ))}
    </div>
  );
}

function MockCreative() {
  return (
    <div className="space-y-3">
      <div className="rounded-lg border border-line p-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-[11px] font-bold text-white">
            A
          </div>
          <div className="leading-tight">
            <p className="text-[11.5px] font-semibold text-ink">Acme.dev</p>
            <p className="text-[9px] uppercase tracking-wider text-brand-600">
              Sponsored
            </p>
          </div>
        </div>
        <p className="mt-2 text-[11.5px] text-ink">
          Ship your SaaS without managing servers
        </p>
        <div className="mt-2.5 inline-flex rounded-md bg-brand-500 px-2.5 py-1 text-[10.5px] font-medium text-white">
          Try Acme →
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-line px-3 py-2">
        <span className="text-[10.5px] text-muted">Approval</span>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9.5px] font-semibold text-emerald-600">
          Live
        </span>
      </div>
    </div>
  );
}

function MockControl() {
  const rows = [
    { n: "DeployBox", s: true },
    { n: "Promptly", s: true },
    { n: "CryptoCasino", s: false },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[11.5px] font-semibold text-ink">Advertisers</p>
      {rows.map((r) => (
        <div
          key={r.n}
          className="flex items-center justify-between rounded-lg border border-line px-3 py-2"
        >
          <span className="text-[11.5px] text-ink">{r.n}</span>
          <span
            className={`flex h-5 w-9 items-center rounded-full p-0.5 ${
              r.s ? "justify-end bg-ink" : "justify-start bg-line"
            }`}
          >
            <span className="h-4 w-4 rounded-full bg-white" />
          </span>
        </div>
      ))}
    </div>
  );
}

const MOCKS: Record<string, () => ReactNode> = {
  x: MockX,
  reddit: MockReddit,
  directories: MockDirectories,
  ads: MockAds,
  audience: MockAudience,
  targeting: MockTargeting,
  analytics: MockAnalytics,
  network: MockNetwork,
  placements: MockPlacements,
  campaign: MockCampaign,
  budget: MockBudget,
  creative: MockCreative,
  control: MockControl,
};

/* ------------------------------------------------------------------ */
/* Showcase                                                            */
/* ------------------------------------------------------------------ */

export type ShowcaseCard = {
  title: string;
  text: string;
  mock: keyof typeof MOCKS;
};

export type ShowcaseTab = {
  label: string;
  cards: ShowcaseCard[];
};

export function Showcase({
  tabs,
  columns = 3,
  showCta = true,
}: {
  tabs: ShowcaseTab[];
  columns?: 3 | 4;
  showCta?: boolean;
}) {
  const [active, setActive] = useState(0);
  const tab = tabs[active] ?? tabs[0];

  return (
    <div>
      {tabs.length > 1 && (
        <div className="mt-10 flex justify-center">
          <div className="inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-line bg-white p-1.5 shadow-[0_14px_36px_-24px_rgba(32,30,31,0.5)]">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`shrink-0 rounded-full px-4 py-2.5 text-[14px] transition-colors sm:px-5 sm:text-[15px] ${
                  i === active
                    ? "bg-ink font-semibold text-white"
                    : "font-medium text-muted hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div
        className={`mt-10 grid gap-6 sm:grid-cols-2 ${
          columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {tab.cards.map((card) => (
          <article key={card.title}>
            <div className="relative h-[230px] overflow-hidden rounded-[14px] bg-[#f0f0ed] p-5 pb-0">
              <div className="h-full overflow-hidden rounded-t-[12px] border border-line bg-white p-4 shadow-[0_16px_40px_-26px_rgba(32,30,31,0.45)]">
                {MOCKS[card.mock]?.()}
              </div>
            </div>

            <h3 className="font-heading mt-5 text-[18px] text-ink">
              {card.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {card.text}
            </p>

            {showCta && (
              <Link
                href="/how-it-works"
                className="mt-4 inline-flex items-center gap-2 py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand-600"
              >
                Learn more
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-white">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
