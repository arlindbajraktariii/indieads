"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/brand/logo-mark";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#advertisers", label: "Advertise" },
];

function Mark() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-7 w-7" />
      <span className="text-[20px] font-semibold tracking-tight text-ink">
        Roket<span className="text-brand-500">Ad</span>
      </span>
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-[1240px] -translate-x-1/2 sm:top-4">
      <div className="nav-pill flex h-[62px] items-center justify-between gap-4 rounded-full pl-5 pr-2.5 sm:h-[68px] sm:pl-6 sm:pr-3">
        <Link href="/" aria-label="RoketAd home" className="flex items-center py-1.5">
          <Mark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink/60 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-[15px] font-medium text-ink/65 transition-colors hover:text-ink"
          >
            Log in
          </Link>
          <Link
            href="/join"
            className="rounded-full bg-ink px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-black"
          >
            Join Waitlist
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="nav-pill mt-2 rounded-[26px] p-3 md:hidden">
          <nav className="flex flex-col gap-0.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-2.5 text-[15px] font-medium text-ink/75 hover:bg-black/[0.04]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-2.5 text-[15px] font-medium text-ink/75 hover:bg-black/[0.04]"
            >
              Log in
            </Link>
            <Link
              href="/join"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-[15px] font-semibold text-white"
            >
              Join Waitlist
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
