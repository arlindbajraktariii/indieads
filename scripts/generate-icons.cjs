/**
 * Generates the RoketAd rocket mark:
 *   src/app/icon.svg          — scalable favicon (auto-linked by Next)
 *   src/app/favicon.ico       — 16/32/48 legacy favicon (PNG-in-ICO)
 *   src/app/apple-icon.png    — 180px iOS home screen icon
 *   public/icon-192.png       — manifest icon
 *   public/icon-512.png       — manifest icon
 *   public/icon-maskable-512.png — Android adaptive icon
 *
 * Run with: npm run icons
 */
const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

const INK = "#201E1F";
const CREAM = "#FFF7F2";
const BRAND = "#F44000";

/** Rocket paths drawn on a 64×64 grid. */
const rocket = (scale = 1) => `
  <g transform="translate(32 32) scale(${scale}) translate(-32 -32)" fill="${CREAM}">
    <path d="M32 6c7 5.4 10.8 13.1 10.8 21.2V41H21.2V27.2C21.2 19.1 25 11.4 32 6Z"/>
    <path d="M21.2 30.4 13.2 41.6l8 2.2V30.4Z"/>
    <path d="M42.8 30.4 50.8 41.6l-8 2.2V30.4Z"/>
    <path d="M27 44h10l-5 10.5L27 44Z"/>
  </g>
  <circle cx="32" cy="24.6" r="5.2" fill="${BRAND}"/>
`;

const roundedSvg = (scale = 1) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="15" fill="${BRAND}"/>
  ${rocket(scale)}
</svg>
`;

const fullBleedSvg = (scale = 1) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" fill="${BRAND}"/>
  ${rocket(scale)}
</svg>
`;

const root = process.cwd();
const publicDir = path.join(root, "public");
const appDir = path.join(root, "src", "app");

async function render(svg, size) {
  return sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
}

/** Assemble a PNG-in-ICO container (supported by all modern browsers). */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + images.length * 16;
  const entries = [];
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(entry);
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

async function main() {
  fs.mkdirSync(publicDir, { recursive: true });

  // Vector favicon + auto-linked icon file
  fs.writeFileSync(path.join(appDir, "icon.svg"), roundedSvg());

  // Legacy .ico (16/32/48)
  const icoImages = await Promise.all(
    [16, 32, 48].map(async (size) => ({
      size,
      data: await render(roundedSvg(), size),
    })),
  );
  fs.writeFileSync(path.join(appDir, "favicon.ico"), buildIco(icoImages));

  // iOS: full-bleed square, the OS applies its own mask
  fs.writeFileSync(
    path.join(appDir, "apple-icon.png"),
    await render(fullBleedSvg(0.82), 180),
  );

  // Manifest icons
  fs.writeFileSync(
    path.join(publicDir, "icon-192.png"),
    await render(roundedSvg(), 192),
  );
  fs.writeFileSync(
    path.join(publicDir, "icon-512.png"),
    await render(roundedSvg(), 512),
  );
  fs.writeFileSync(
    path.join(publicDir, "icon-maskable-512.png"),
    await render(fullBleedSvg(0.72), 512),
  );

  console.log("Generated:");
  for (const file of [
    "src/app/icon.svg",
    "src/app/favicon.ico",
    "src/app/apple-icon.png",
    "public/icon-192.png",
    "public/icon-512.png",
    "public/icon-maskable-512.png",
  ]) {
    const { size } = fs.statSync(path.join(root, file));
    console.log(`  ${file}  ${(size / 1024).toFixed(1)} kB`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
