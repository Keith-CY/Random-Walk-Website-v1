#!/usr/bin/env node
// Pre-renders WebP variants of every raster image in public/ for lib/image-loader.ts.
// Output goes to public/_optimized/<path>-<width>.webp; unchanged sources are skipped.
import { mkdir, readFile, readdir, stat } from "node:fs/promises";
import { availableParallelism } from "node:os";
import { dirname, join, relative } from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = join(root, "public");
const outDir = join(publicDir, "_optimized");
const { widths } = JSON.parse(await readFile(join(root, "lib/image-widths.json"), "utf8"));
const skipped = new Set(["apple-touch-icon.png", "favicon-16x16.png", "favicon-32x32.png"]);

async function collectSources(dir) {
  const sources = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (path !== outDir) sources.push(...(await collectSources(path)));
    } else if (/\.(png|jpe?g)$/i.test(entry.name) && !skipped.has(relative(publicDir, path))) {
      sources.push(path);
    }
  }
  return sources;
}

async function isFresh(source, target) {
  try {
    return (await stat(target)).mtimeMs >= (await stat(source)).mtimeMs;
  } catch {
    return false;
  }
}

const jobs = [];
for (const source of await collectSources(publicDir)) {
  const base = relative(publicDir, source).replace(/\.(png|jpe?g)$/i, "");
  for (const width of widths) {
    jobs.push({ source, width, target: join(outDir, `${base}-${width}.webp`) });
  }
}

let written = 0;
async function worker() {
  for (let job = jobs.shift(); job; job = jobs.shift()) {
    if (await isFresh(job.source, job.target)) continue;
    await mkdir(dirname(job.target), { recursive: true });
    await sharp(job.source).resize({ width: job.width, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(job.target);
    written += 1;
  }
}

const total = jobs.length;
await Promise.all(Array.from({ length: Math.min(4, availableParallelism()) }, worker));
console.log(`optimize-images: ${written} written, ${total - written} up to date`);
