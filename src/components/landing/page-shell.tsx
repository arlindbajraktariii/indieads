import { Nav } from "@/components/landing/nav";
import { SiteFooter } from "@/components/landing/site-footer";
import { FinalCta } from "@/components/landing/final-cta";
import type { LucideIcon } from "lucide-react";

export function PageShell({
  kicker,
  title,
  description,
  heroExtra,
  children,
  cta = true,
}: {
  kicker: string;
  title: string;
  description?: string;
  heroExtra?: React.ReactNode;
  children: React.ReactNode;
  cta?: boolean;
}) {
  return (
    <div className="min-h-screen bg-page">
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(52%_60%_at_50%_0%,#ffe7dc_0%,rgba(255,255,255,0)_75%)]" />
          <div className="relative mx-auto max-w-[900px] px-5 pb-14 pt-[132px] text-center sm:pb-20 sm:pt-[152px]">
            <span className="hero-badge-pill">{kicker}</span>
            <h1 className="font-heading mt-6 text-[34px] leading-[1.06] tracking-[-0.04em] text-ink sm:text-[54px]">
              {title}
            </h1>
            {description ? (
              <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-relaxed text-ink/65 sm:text-[19px]">
                {description}
              </p>
            ) : null}
            {heroExtra ? <div className="mt-9">{heroExtra}</div> : null}
          </div>
        </section>

        <div className="mx-auto max-w-[1080px] px-4 pb-20 pt-14 sm:pt-16">
          {children}
        </div>

        {cta ? <FinalCta /> : null}
      </main>
      <SiteFooter />
    </div>
  );
}

export function PageSection({
  title,
  intro,
  children,
  className = "",
}: {
  title: string;
  intro?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mt-16 first:mt-0 ${className}`}>
      <h2 className="font-heading text-[26px] leading-tight tracking-[-0.03em] text-ink sm:text-[34px]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-[720px] text-[16px] leading-relaxed text-muted">
          {intro}
        </p>
      ) : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}

export function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon?: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      {Icon ? (
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
          <Icon className="h-5 w-5" />
        </span>
      ) : null}
      <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-ink">
        {title}
      </h3>
      <div className="mt-2 text-[15px] leading-relaxed text-muted">{children}</div>
    </div>
  );
}

export function StepList({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  return (
    <ol className="space-y-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="flex gap-4 rounded-2xl border border-line bg-white p-5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-[13px] font-semibold text-white">
            {i + 1}
          </span>
          <div>
            <p className="text-[16px] font-semibold text-ink">{step.title}</p>
            <p className="mt-1 text-[15px] leading-relaxed text-muted">
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-[15.5px] leading-relaxed text-muted [&_a]:font-medium [&_a]:text-brand-500 [&_h2]:font-heading [&_h2]:text-[22px] [&_h2]:leading-tight [&_h2]:text-ink [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-ink [&_li]:pl-1 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  );
}
