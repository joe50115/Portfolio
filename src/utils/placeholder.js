/* Deterministic SVG placeholder generator — no network requests, no image files.
   Swap svgPlaceholder(...) for a real <img src> once you have real screenshots. */

export function hashSeed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function svgPlaceholder(seedStr, labelText, w = 640, h = 360) {
  const seed = hashSeed(seedStr);
  const dotCount = 6 + (seed % 5);
  let dots = "";
  for (let i = 0; i < dotCount; i++) {
    const x = (seed * (i * 13 + 7)) % w;
    const y = (seed * (i * 17 + 3)) % h;
    dots += `<circle cx="${x}" cy="${y}" r="2.5" fill="#4fd1c5" opacity="0.45"/>`;
  }

  let grid = "";
  for (let gx = 0; gx <= w; gx += 32) {
    grid += `<line x1="${gx}" y1="0" x2="${gx}" y2="${h}" stroke="#1b2228" stroke-width="1"/>`;
  }
  for (let gy = 0; gy <= h; gy += 32) {
    grid += `<line x1="0" y1="${gy}" x2="${w}" y2="${gy}" stroke="#1b2228" stroke-width="1"/>`;
  }

  const b = 20;
  const corners = `
    <path d="M8 ${8 + b} V8 H${8 + b}" stroke="#4fd1c5" stroke-width="2" fill="none"/>
    <path d="M${w - 8 - b} 8 H${w - 8} V${8 + b}" stroke="#4fd1c5" stroke-width="2" fill="none"/>
    <path d="M8 ${h - 8 - b} V${h - 8} H${8 + b}" stroke="#4fd1c5" stroke-width="2" fill="none"/>
    <path d="M${w - 8 - b} ${h - 8} H${w - 8} V${h - 8 - b}" stroke="#4fd1c5" stroke-width="2" fill="none"/>
  `;

  const safeLabel = String(labelText).slice(0, 6);
  const fontSize = Math.floor(h * (safeLabel.length > 4 ? 0.22 : 0.3));

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" fill="#12171c"/>
    ${grid}
    ${dots}
    ${corners}
    <text x="50%" y="54%" font-family="JetBrains Mono, monospace" font-size="${fontSize}" fill="#232d35" text-anchor="middle" font-weight="700" letter-spacing="2">${safeLabel}</text>
  </svg>`;

  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}
