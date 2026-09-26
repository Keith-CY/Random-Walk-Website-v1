import imageWidths from "./image-widths.json";

const { widths } = imageWidths;

type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const optimizableSource = /^\/(?!_optimized\/)[^?#]+\.(png|jpe?g)$/i;

// Static export has no image server, so production builds point next/image at WebP
// variants pre-rendered by scripts/optimize-images.mjs into public/_optimized/.
export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (process.env.NODE_ENV !== "production" || !optimizableSource.test(src)) {
    return `${src}?w=${width}`;
  }

  const variant = widths.find((candidate) => candidate >= width) ?? widths[widths.length - 1];
  return `/_optimized${src.replace(/\.(png|jpe?g)$/i, "")}-${variant}.webp`;
}
