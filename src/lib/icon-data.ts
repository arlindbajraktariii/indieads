import fs from "node:fs";
import path from "node:path";

let cached: string | null = null;

/** Inline the app icon for `next/og` images (Satori needs a data URI or absolute URL). */
export function getIconDataUri(): string {
  if (cached) return cached;

  const file = path.join(process.cwd(), "public", "icon-512.png");
  cached = `data:image/png;base64,${fs.readFileSync(file).toString("base64")}`;
  return cached;
}
