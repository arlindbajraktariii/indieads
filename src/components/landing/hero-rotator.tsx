"use client";

import { useEffect, useRef, useState } from "react";

const AUDIENCES = [
  "✨ indie hackers",
  "👩‍💻 developers",
  "🚀 solo founders",
  "🎨 designers",
  "🛠️ builders",
];

const ROTATE_MS = 2600;
const EXIT_MS = 460;

/**
 * The highlighted phrase in the hero headline, cycling through the
 * audiences RoketAd is built for. The pill keeps a stable width (sized by
 * the widest phrase) so the headline never shifts while words rotate.
 */
export function HeroRotator() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const id = window.setInterval(() => {
      const previous = indexRef.current;
      const next = (previous + 1) % AUDIENCES.length;
      indexRef.current = next;
      setLeaving(previous);
      setIndex(next);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (leaving === null) return;
    const id = window.setTimeout(() => setLeaving(null), EXIT_MS);
    return () => window.clearTimeout(id);
  }, [leaving]);

  return (
    <span className="hero-highlight hero-rotator mt-2 whitespace-nowrap sm:mt-3">
      <span className="sr-only">
        indie hackers, developers, solo founders and more
      </span>

      {AUDIENCES.map((label) => (
        <span key={label} aria-hidden="true" className="hero-rotator__sizer">
          {label}
        </span>
      ))}

      {leaving !== null ? (
        <span aria-hidden="true" className="hero-word hero-word--out">
          {AUDIENCES[leaving]}
        </span>
      ) : null}

      <span key={index} aria-hidden="true" className="hero-word hero-word--in">
        {AUDIENCES[index]}
      </span>
    </span>
  );
}
