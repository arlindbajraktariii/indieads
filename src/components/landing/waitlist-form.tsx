"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; position: number }
  | { status: "error"; message: string };

export function WaitlistForm({ variant = "panel" }: { variant?: "panel" | "hero" }) {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [email, setEmail] = useState("");

  const submitting = state.status === "submitting";
  const hero = variant === "hero";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || submitting) return;

    setState({ status: "submitting" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setState({ status: "success", position: data.position as number });
      } else {
        setState({
          status: "error",
          message: data.error ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setState({
        status: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white">
          <Check className="h-5 w-5" strokeWidth={3} />
        </span>
        <p
          className={`text-[19px] font-semibold ${
            hero ? "text-ink" : "text-white"
          }`}
        >
          You&apos;re in!
        </p>
        <p
          className={`text-[15px] leading-relaxed ${
            hero ? "text-ink/65" : "text-white/70"
          }`}
        >
          You&apos;re{" "}
          <span
            className={`font-semibold ${
              hero ? "text-brand-500" : "text-brand-400"
            }`}
          >
            #{state.position} on the list
          </span>
          . We&apos;ll email you the moment RoketAd launches.
        </p>
      </div>
    );
  }

  if (hero) {
    return (
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-[580px] flex-col gap-2 rounded-[22px] border border-line bg-white p-2 shadow-[0_26px_60px_-42px_rgba(32,30,31,0.55)] sm:flex-row sm:items-center sm:rounded-full sm:pl-5"
        >
          <div className="flex flex-1 items-center gap-2.5 px-3 sm:px-0">
            <Mail className="h-4 w-4 shrink-0 text-ink/35" />
            <input
              id="waitlist-email-hero"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourstartup.com"
              disabled={submitting}
              aria-label="Email address"
              className="h-12 w-full min-w-0 bg-transparent text-[15px] text-ink placeholder:text-ink/35 focus:outline-none disabled:opacity-60"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[14px] bg-brand-500 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-70 sm:rounded-full"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Joining…
              </>
            ) : (
              <>
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        {state.status === "error" ? (
          <p className="mt-3 text-center text-[13px] text-red-600">
            {state.message}
          </p>
        ) : (
          <p className="mt-3 text-center text-[13px] text-muted">
            No spam. Just one email when we launch.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label
          htmlFor="waitlist-email"
          className="text-[13px] font-medium text-white/60"
        >
          Email address
        </label>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            id="waitlist-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={submitting}
            className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.05] pl-11 pr-4 text-[15px] text-white placeholder:text-white/35 transition-colors focus:border-brand-500/60 focus:outline-none disabled:opacity-60"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="btn-brand h-12 w-full !text-[15px] disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Joining…
            </>
          ) : (
            <>
              Join RoketAd
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {state.status === "error" && (
        <p className="mt-3 text-center text-[13px] text-red-400">
          {state.message}
        </p>
      )}

      <p className="mt-4 text-center text-[13px] text-white/40">
        No spam. Just launch updates.
      </p>
    </div>
  );
}
