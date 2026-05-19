"use client";

import { useState } from "react";
import { PlaceholderImage } from "@/components/placeholder-image";
import type { VisualAssetId } from "@/lib/visual-assets";

export type VisualTabItem = {
  label: string;
  eyebrow?: string;
  title: string;
  description: string;
  assetId: VisualAssetId;
};

type VisualTabsProps = {
  items: VisualTabItem[];
  variant?: "paper" | "ink";
  showVisual?: boolean;
};

export function VisualTabs({ items, variant = "paper", showVisual = true }: VisualTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];
  const isInk = variant === "ink";
  const selectRelative = (offset: number) => setActiveIndex((current) => (current + offset + items.length) % items.length);

  return (
    <div className={`rw-visual-tabs ${isInk ? "rw-visual-tabs-ink" : ""} ${showVisual ? "" : "rw-visual-tabs-compact"}`}>
      <div className="rw-tab-list" role="tablist" aria-label="Visual examples">
        {items.map((item, index) => (
          <button
            aria-controls={`visual-panel-${item.label.replace(/\W/g, "-")}`}
            aria-selected={activeIndex === index}
            className="rw-tab-button"
            id={`visual-tab-${item.label.replace(/\W/g, "-")}`}
            key={item.label}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                selectRelative(1);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                selectRelative(-1);
              }
              if (event.key === "Home") {
                event.preventDefault();
                setActiveIndex(0);
              }
              if (event.key === "End") {
                event.preventDefault();
                setActiveIndex(items.length - 1);
              }
            }}
            onClick={() => setActiveIndex(index)}
            role="tab"
            tabIndex={0}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        aria-labelledby={`visual-tab-${active.label.replace(/\W/g, "-")}`}
        className="rw-tab-panel"
        id={`visual-panel-${active.label.replace(/\W/g, "-")}`}
        key={active.label}
        role="tabpanel"
      >
        <div>
          {active.eyebrow ? <p className="rw-eyebrow">{active.eyebrow}</p> : null}
          <h3 className="rw-subheading mt-3">{active.title}</h3>
          <p className="rw-body mt-4">{active.description}</p>
        </div>
        {showVisual ? <PlaceholderImage assetId={active.assetId} variant={isInk ? "ink" : "paper"} /> : null}
      </div>
    </div>
  );
}
