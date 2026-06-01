import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import toIco from 'to-ico';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'app/icon.svg'));

const pngOutputs = [
  ['public/logo-48.png', 48],
  ['public/logo-192.png', 192],
  ['public/logo-512.png', 512],
  ['public/apple-touch-icon.png', 180],
  ['public/favicon-32.png', 32],
  ['public/favicon-16.png', 16],
];

for (const [rel, size] of pngOutputs) {
  await sharp(svg).resize(size, size).png({ compressionLevel: 9 }).toFile(join(root, rel));
  console.log(`Wrote ${rel} (${size}x${size})`);
}

const icoSizes = [16, 32, 48];
const icoBuffers = await Promise.all(
  icoSizes.map((size) => sharp(svg).resize(size, size).png().toBuffer()),
);
const ico = await toIco(icoBuffers);
for (const dest of ['public/favicon.ico', 'app/favicon.ico']) {
  writeFileSync(join(root, dest), ico);
  console.log(`Wrote ${dest} (${ico.length} bytes)`);
}
