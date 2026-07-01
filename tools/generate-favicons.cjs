// Rasterize favicons/favicon.svg into the PNG sizes the site references.
// Requires rsvg-convert (librsvg) on PATH.

const { execFileSync } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'favicons', 'favicon.svg');

const TARGETS = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['favicon-48.png', 48],
  ['favicon-96.png', 96],
  ['favicon-180.png', 180],
  ['apple-touch-icon.png', 180],
  ['favicon-192.png', 192],
  ['favicon-512.png', 512],
];

for (const [name, size] of TARGETS) {
  const out = path.join(ROOT, 'favicons', name);
  execFileSync('rsvg-convert', ['-w', String(size), '-h', String(size), SRC, '-o', out]);
  console.log(`Wrote favicons/${name} (${size}x${size})`);
}
