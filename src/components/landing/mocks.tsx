import { BarChart3, Check, MousePointerClick, TrendingUp } from "lucide-react";

/**
 * Hero visual: a browser window showing an ad placed inside an indie blog,
 * plus floating stat chips — mirrors Coinzilla's hero illustration.
 */
export function AdPreviewMock() {
  return (
    <div className="relative w-full">
      {/* Browser window */}
      <div className="overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-3 border-b border-line bg-[#f4f7fa] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto hidden w-full max-w-[340px] rounded-md border border-line bg-white px-3 py-1 text-center text-[11px] text-muted sm:block">
            hackernightly.dev/blog/launching-your-saas
          </div>
          <span className="hidden rounded-md bg-brand-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-600 sm:block">
            Sponsored
          </span>
        </div>

        <div className="grid gap-0 sm:grid-cols-[1fr_260px]">
          {/* Article body */}
          <div className="space-y-3 p-5 sm:p-7">
            <div className="h-4 w-[70%] rounded-full bg-navy-900/85" />
            <div className="h-2 w-full rounded-full bg-line" />
            <div className="h-2 w-[94%] rounded-full bg-line" />

            {/* The ad unit */}
            <div className="rounded-xl border border-brand-100 bg-brand-50 p-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-[13px] font-bold text-white">
                  A
                </div>
                <div className="leading-tight">
                  <p className="text-[13px] font-semibold text-navy-900">Acme.dev</p>
                  <p className="text-[10px] uppercase tracking-wider text-brand-600">
                    Sponsored
                  </p>
                </div>
              </div>
              <p className="mt-2.5 text-[13px] font-semibold text-ink">
                Ship your SaaS without managing servers
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1.5 text-[12px] font-medium text-white">
                Try Acme →
              </div>
            </div>

            <div className="h-2 w-[88%] rounded-full bg-line" />
            <div className="h-2 w-[76%] rounded-full bg-line" />
            <div className="h-2 w-[62%] rounded-full bg-line" />
          </div>

          {/* Sidebar */}
          <div className="hidden border-l border-line bg-[#fbfdff] p-4 sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              Recommended
            </p>
            <div className="mt-3 space-y-3">
              {[
                { n: "DeployBox", d: "Deploy in 30 seconds" },
                { n: "Promptly", d: "AI copy that converts" },
                { n: "InvoiceKit", d: "Invoices on autopilot" },
              ].map((item) => (
                <div
                  key={item.n}
                  className="rounded-lg border border-line bg-white p-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded bg-navy-900/85" />
                    <p className="text-[11px] font-semibold text-navy-900">
                      {item.n}
                    </p>
                  </div>
                  <p className="mt-1 text-[10.5px] leading-snug text-muted">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip: clicks */}
      <div className="absolute -left-2 top-[46%] hidden items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-[0_20px_40px_-20px_rgba(1,18,35,0.55)] sm:-left-6 sm:flex">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
          <MousePointerClick className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] text-muted">Clicks today</p>
          <p className="text-[14px] font-bold text-navy-900">1,284</p>
        </div>
      </div>

      {/* Floating chip: signups */}
      <div className="absolute -right-2 top-[12%] hidden items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-[0_20px_40px_-20px_rgba(1,18,35,0.55)] sm:-right-6 sm:flex">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          <TrendingUp className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] text-muted">Signups</p>
          <p className="text-[14px] font-bold text-emerald-600">+312</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Campaign dashboard mockup used in the "campaign within minutes" section.
 */
export function DashboardMock() {
  const bars = [38, 55, 42, 70, 58, 82, 66, 94, 76, 100, 88, 96];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_70px_-40px_rgba(13,49,85,0.55)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="text-[12px] font-medium text-muted">Campaign · Launch week</p>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
          Active
        </span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
        {[
          { label: "Impressions", value: "184,320", icon: BarChart3 },
          { label: "Clicks", value: "6,412", icon: MousePointerClick },
          { label: "CTR", value: "3.48%", icon: TrendingUp },
        ].map((stat) => (
          <div key={stat.label} className="px-4 py-4 sm:px-5">
            <div className="flex items-center gap-1.5 text-muted">
              <stat.icon className="h-3.5 w-3.5" />
              <p className="text-[11px]">{stat.label}</p>
            </div>
            <p className="mt-1 text-[18px] font-bold text-navy-900 sm:text-[20px]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="px-5 py-5">
        <div className="flex items-end justify-between gap-1.5 sm:gap-2">
          {bars.map((height, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-[4px] ${
                i >= bars.length - 3 ? "bg-brand-500" : "bg-navy-900/10"
              }`}
              style={{ height: `${height * 0.9}px` }}
            />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 pt-4 text-[12px] text-muted">
          {["AI tools", "Dev blogs", "SaaS directories", "Newsletters"].map((zone) => (
            <span key={zone} className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-brand-500" /> {zone}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Publisher widget snippet card.
 */
export function WidgetSnippet() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/60 shadow-[0_30px_70px_-40px_rgba(1,18,35,0.9)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <p className="text-[12px] font-medium text-white/70">Install the widget</p>
        <span className="rounded-full bg-brand-500/15 px-2.5 py-1 text-[11px] font-semibold text-brand-400">
          2 lines
        </span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-relaxed text-white/80">
        <code>
          {`<script src="https://cdn.roketad.com/w.js" async></script>`}
          {"\n"}
          {`<div data-roketad="auto"></div>`}
        </code>
      </pre>
      <div className="border-t border-white/10 bg-white/[0.03] px-5 py-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500 text-[12px] font-bold text-white">
              F
            </div>
            <div className="leading-tight">
              <p className="text-[12px] font-semibold text-white">Fathom Analytics</p>
              <p className="text-[10px] uppercase tracking-wider text-brand-400">
                Sponsored
              </p>
            </div>
          </div>
          <p className="mt-2 text-[12px] text-white/70">
            Privacy-first analytics your users won&apos;t hate.
          </p>
        </div>
        <p className="mt-3 text-[11px] text-white/40">
          Relevant ads only · You approve every advertiser · Paid monthly
        </p>
      </div>
    </div>
  );
}
