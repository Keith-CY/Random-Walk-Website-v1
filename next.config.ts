import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { widths } = JSON.parse(readFileSync(join(__dirname, "lib/image-widths.json"), "utf8")) as { widths: number[] };

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: widths.filter((width) => width >= 640),
    imageSizes: widths.filter((width) => width < 640)
  },
  typedRoutes: false
};

// The custom loader points at pre-rendered WebP files, so every production build
// (however it is invoked) must generate them first.
function optimizeImages() {
  if (process.env.RW_IMAGES_OPTIMIZED) return;
  const result = spawnSync(process.execPath, [join(__dirname, "scripts/optimize-images.mjs")], { cwd: __dirname, stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error("scripts/optimize-images.mjs failed; production images would be missing.");
  }
  process.env.RW_IMAGES_OPTIMIZED = "1";
}

export default function config(phase: string): NextConfig {
  if (phase === PHASE_PRODUCTION_BUILD) optimizeImages();
  return nextConfig;
}
