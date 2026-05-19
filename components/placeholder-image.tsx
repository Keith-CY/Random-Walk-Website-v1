import Image from "next/image";
import { visualAssets, type VisualAssetId } from "@/lib/visual-assets";

type PlaceholderImageProps = {
  assetId?: VisualAssetId;
  label?: string;
  description?: string;
  variant?: "paper" | "stone" | "ink";
  ratio?: string;
  priority?: boolean;
};

export function PlaceholderImage({ assetId, label, description, variant = "stone", ratio = "16 / 10", priority = false }: PlaceholderImageProps) {
  const isInk = variant === "ink";
  const asset = assetId ? visualAssets[assetId] : null;
  const displayLabel = label ?? asset?.caption ?? "Placeholder visual";
  const displayDescription = description;

  if (asset) {
    const loadingProps = priority ? { priority: true } : { loading: "eager" as const };

    return (
      <figure
        className={`rw-image-frame rw-hover-lift ${isInk ? "rw-image-frame-ink" : ""}`}
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={`/${asset.src}`}
          alt={asset.alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          {...loadingProps}
          className="object-cover"
        />
        <div className="rw-engraving-lines" aria-hidden="true" />
        <div className="rw-image-shimmer" aria-hidden="true" />
      </figure>
    );
  }

  return (
    <div
      className={`rw-image-fallback ${isInk ? "rw-image-fallback-ink" : ""}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 opacity-35" aria-hidden="true">
        <svg viewBox="0 0 600 380" className="h-full w-full">
          <defs>
            <pattern id={`grid-${displayLabel.replace(/\W/g, "")}`} width="34" height="34" patternUnits="userSpaceOnUse">
              <path d="M 34 0 L 0 0 0 34" fill="none" stroke={isInk ? "#f7f4ec" : "#050505"} strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="600" height="380" fill={`url(#grid-${displayLabel.replace(/\W/g, "")})`} />
          <path d="M62 288C140 172 226 212 304 105C372 12 460 98 537 44" fill="none" stroke={isInk ? "#c5a35a" : "#050505"} strokeWidth="3" strokeLinecap="round" />
          <rect x="68" y="62" width="458" height="238" rx="10" fill="none" stroke={isInk ? "#f7f4ec" : "#050505"} strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="rw-caption">{displayLabel}</p>
        {displayDescription ? <p className={isInk ? "mt-2 text-sm text-[var(--rw-inverse-muted)]" : "mt-2 text-sm text-[var(--rw-graphite)]"}>{displayDescription}</p> : null}
      </div>
    </div>
  );
}
