import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, Lock, Rocket } from "lucide-react";
import { PageShell } from "@/components/landing/page-shell";

export const metadata: Metadata = pageMetadata({
  title: "Log in",
  description:
    "The RoketAd advertiser dashboard is not open yet. Join the waitlist to get access first.",
  path: "/login",
  noindex: true,
});

export default function LoginPage() {
  return (
    <PageShell
      kicker="Advertiser dashboard"
      title="The dashboard isn’t open yet."
      description="RoketAd is still pre-launch. There are no accounts to log into — the advertiser dashboard opens to waitlist members first."
      cta={false}
    >
      <div className="mx-auto max-w-[720px]">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-line bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
              <Rocket className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[15px] font-semibold text-ink">Join first</p>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              Waitlist members get their invite before public access.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
              <LayoutDashboard className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[15px] font-semibold text-ink">Launch</p>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              Create a campaign, set a budget and go live in minutes.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
              <Lock className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[15px] font-semibold text-ink">No account yet</p>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              Nothing to sign into today — no password to reset, no trial to cancel.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-line bg-white p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-[16px] font-semibold text-ink">
              Want early access?
            </p>
            <p className="mt-1 text-[14px] text-muted">
              It takes one email and about ten seconds.
            </p>
          </div>
          <Link
            href="/join"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
