"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "h-12 w-full rounded-xl border border-line bg-white px-4 text-[15px] text-ink placeholder:text-ink/35 transition-colors focus:border-brand-500/60 focus:outline-none disabled:opacity-60";

export function ContactForm({
  topics,
  defaultTopic,
  showSite = false,
  messagePlaceholder = "Tell us a bit about what you’re building…",
  submitLabel = "Send message",
}: {
  topics: { value: string; label: string }[];
  defaultTopic?: string;
  showSite?: boolean;
  messagePlaceholder?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: defaultTopic ?? topics[0]?.value ?? "general",
    siteUrl: "",
    message: "",
  });

  const submitting = status === "submitting";

  function update(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
          <Check className="h-6 w-6" strokeWidth={3} />
        </span>
        <p className="mt-4 text-[19px] font-semibold text-ink">
          Message sent — thank you!
        </p>
        <p className="mx-auto mt-2 max-w-[420px] text-[15px] leading-relaxed text-muted">
          We read every message. Expect a reply at {form.email} within a couple of
          working days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-5 sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[13px] font-medium text-ink/70">Your name</span>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Ada Lovelace"
            disabled={submitting}
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[13px] font-medium text-ink/70">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@yourstartup.com"
            disabled={submitting}
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[13px] font-medium text-ink/70">Topic</span>
          <select
            value={form.topic}
            onChange={(e) => update("topic", e.target.value)}
            disabled={submitting}
            className={fieldClass}
          >
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>

        {showSite ? (
          <label className="flex flex-col gap-2">
            <span className="text-[13px] font-medium text-ink/70">
              Website or product URL
            </span>
            <input
              type="url"
              value={form.siteUrl}
              onChange={(e) => update("siteUrl", e.target.value)}
              placeholder="https://yoursite.com"
              disabled={submitting}
              className={fieldClass}
            />
          </label>
        ) : (
          <div className="hidden sm:block" />
        )}

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-[13px] font-medium text-ink/70">Message</span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder={messagePlaceholder}
            disabled={submitting}
            className="w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-[15px] leading-relaxed text-ink placeholder:text-ink/35 transition-colors focus:border-brand-500/60 focus:outline-none disabled:opacity-60"
          />
        </label>
      </div>

      {status === "error" ? (
        <p className="mt-4 text-[13px] text-red-600">{error}</p>
      ) : null}

      <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-muted">
          We never share your email. No newsletters unless you ask.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-brand-600 disabled:opacity-70 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              {submitLabel}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
