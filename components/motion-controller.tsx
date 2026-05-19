"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const motionSelector = [
  "main > .rw-section > .rw-container",
  ".rw-visual-tabs",
  ".rw-image-frame",
  ".rw-institutional-cell",
  ".rw-provenance-panel",
  ".rw-obsidian-panel",
  ".rw-metadata-strip",
  ".rw-form-section"
].join(",");

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const root = document.documentElement;
    root.classList.add("rw-motion-ready");

    const targets = Array.from(document.querySelectorAll<HTMLElement>(motionSelector)).filter((element) => !element.closest("header, footer"));
    targets.forEach((element, index) => {
      element.classList.add("rw-motion-reveal");
      element.style.setProperty("--rw-motion-index", String(index % 7));
      if (element.matches(".rw-image-frame")) {
        element.classList.add("rw-motion-image");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("rw-in-view");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    targets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      targets.forEach((element) => {
        element.classList.remove("rw-motion-reveal", "rw-motion-image", "rw-in-view");
        element.style.removeProperty("--rw-motion-index");
      });
    };
  }, [pathname]);

  return null;
}
