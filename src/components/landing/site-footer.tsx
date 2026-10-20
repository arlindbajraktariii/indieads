import Link from "next/link";
import { Heart } from "lucide-react";
import { LogoMark } from "@/components/brand/logo-mark";

/* Zig-zag "washi tape" edges for the footer decoration */
const TAPE_CLIP = (() => {
  const teeth = 22;
  const top: string[] = [];
  const bottom: string[] = [];
  for (let i = 0; i <= teeth; i++) {
    const x = ((i / teeth) * 100).toFixed(2);
    top.push(`${x}% ${i % 2 ? 16 : 0}%`);
    bottom.push(`${x}% ${i % 2 ? 84 : 100}%`);
  }
  return `polygon(${top.join(", ")}, ${bottom.reverse().join(", ")})`;
})();

const columns = [
  {
    title: "Product",
    accent: "#f44000",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Advertise", href: "/advertise" },
      { label: "Publishers", href: "/publishers" },
      { label: "Pricing", href: "/pricing" },
      { label: "Why RoketAd", href: "/why-roketad" },
    ],
  },
  {
    title: "Getting Started",
    accent: "#ff6a33",
    links: [
      { label: "Join the waitlist", href: "/join" },
      { label: "FAQ", href: "/faq" },
      { label: "Ad guidelines", href: "/ad-guidelines" },
      { label: "Become a publisher", href: "/become-a-publisher" },
    ],
  },
  {
    title: "Company",
    accent: "#d63700",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="overflow-x-clip px-4 pb-10 pt-6 sm:pt-10">
      <div className="relative mx-auto max-w-[1240px]">
        {/* Washi tape corners */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 -top-7 z-10 h-[46px] w-[150px] -rotate-[24deg] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.45)_0_6px,transparent_6px_12px),linear-gradient(180deg,#ffd9c7,#ffc9b0)] sm:-left-8"
          style={{ clipPath: TAPE_CLIP }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-7 z-10 h-[46px] w-[150px] rotate-[24deg] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.45)_0_6px,transparent_6px_12px),linear-gradient(180deg,#ffd9c7,#ffc9b0)] sm:-right-8"
          style={{ clipPath: TAPE_CLIP }}
        />

        <div className="rounded-[26px] border border-line bg-white px-7 py-12 sm:px-12 sm:py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <Link
                href="/"
                aria-label="RoketAd home"
                className="inline-flex items-center gap-2.5"
              >
                <LogoMark className="h-7 w-7" />
                <span className="text-[22px] font-semibold tracking-tight text-ink">
                  Roket<span className="text-brand-500">Ad</span>
                </span>
              </Link>
              <p className="mt-5 max-w-[300px] text-[15px] leading-relaxed text-muted">
                Advertising for indie hackers. Reach founders, developers and early
                adopters where they already hang out.
              </p>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h3
                  className="text-[18px] font-semibold tracking-tight"
                  style={{ color: col.accent }}
                >
                  {col.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-ink/75 transition-colors hover:text-brand-500"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-7 flex max-w-[1240px] flex-col items-center justify-between gap-4 px-2 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[14px] text-ink/60">
          <span>© 2026 RoketAd. All rights reserved.</span>
          <Link href="/privacy" className="transition-colors hover:text-ink">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-ink">
            Terms and Conditions
          </Link>
          <span className="inline-flex items-center gap-1.5">
            Built by Arlind with
            <Heart
              className="h-3.5 w-3.5 fill-brand-500 text-brand-500"
              aria-hidden="true"
            />
            <span className="sr-only">love</span>
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/contact"
            aria-label="RoketAd on LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white text-[15px] font-semibold text-ink/70 transition-colors hover:text-ink"
          >
            in
          </Link>
        </div>
      </div>
    </footer>
  );
}
