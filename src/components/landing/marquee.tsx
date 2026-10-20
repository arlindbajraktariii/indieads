const audienceChips = [
  "SaaS Founders",
  "Indie Hackers",
  "Developers",
  "Early Adopters",
  "AI Builders",
  "Solo Founders",
  "Bootstrappers",
  "Dev Tool Makers",
  "Newsletter Writers",
  "Micro-SaaS",
];

const categoryChips = [
  "SaaS",
  "AI",
  "Developer Tools",
  "Productivity",
  "Marketing",
  "Startups",
  "Analytics",
  "No-Code",
  "APIs",
  "Hosting",
];

function Chip({ label, navy = false }: { label: string; navy?: boolean }) {
  return (
    <div
      className={`mr-3 inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-[14px] font-medium ${
        navy
          ? "border-navy-900 bg-navy-900 text-white/85"
          : "border-line bg-white text-ink"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      {label}
    </div>
  );
}

/**
 * Infinite scrolling marquee with two rows moving in opposite directions.
 * The track is duplicated once and animated to -50% for a seamless loop.
 */
export function LogoMarquee() {
  return (
    <div className="marquee-mask space-y-3 overflow-hidden py-2">
      <div className="marquee-track">
        {[...audienceChips, ...audienceChips].map((label, i) => (
          <Chip key={`${label}-${i}`} label={label} />
        ))}
      </div>
      <div className="marquee-track reverse">
        {[...categoryChips, ...categoryChips].map((label, i) => (
          <Chip key={`${label}-${i}`} label={label} navy />
        ))}
      </div>
    </div>
  );
}
