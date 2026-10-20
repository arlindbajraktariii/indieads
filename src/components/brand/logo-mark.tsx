/**
 * RoketAd brand mark: a rocket on the brand-orange tile.
 * Same artwork as the favicon/app icons (scripts/generate-icons.cjs).
 */
export function LogoMark({
  className = "h-7 w-7",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="15" fill="#F44000" />
      <g fill="#FFF7F2">
        <path d="M32 6c7 5.4 10.8 13.1 10.8 21.2V41H21.2V27.2C21.2 19.1 25 11.4 32 6Z" />
        <path d="M21.2 30.4 13.2 41.6l8 2.2V30.4Z" />
        <path d="M42.8 30.4 50.8 41.6l-8 2.2V30.4Z" />
        <path d="M27 44h10l-5 10.5L27 44Z" />
      </g>
      <circle cx="32" cy="24.6" r="5.2" fill="#F44000" />
    </svg>
  );
}
