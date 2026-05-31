import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'app/icon.svg'));

const outputs = [
  ['public/logo-48.png', 48],
  ['public/logo-192.png', 192],
  ['public/logo-512.png', 512],
  ['public/apple-touch-icon.png', 180],
  ['public/favicon-32.png', 32],
];

for (const [rel, size] of outputs) {
  await sharp(svg).resize(size, size).png({ compressionLevel: 9 }).toFile(join(root, rel));
  console.log(`Wrote ${rel} (${size}x${size})`);
}
