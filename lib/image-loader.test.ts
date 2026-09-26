import { afterEach, describe, expect, test } from "bun:test";
import imageLoader from "./image-loader";
import imageWidths from "./image-widths.json";

const { widths } = imageWidths;

const originalEnv = process.env.NODE_ENV;

function setNodeEnv(value: string | undefined) {
  (process.env as Record<string, string | undefined>).NODE_ENV = value;
}

describe("static export image loader", () => {
  afterEach(() => setNodeEnv(originalEnv));

  test("serves pre-rendered WebP variants in production", () => {
    setNodeEnv("production");
    expect(imageLoader({ src: "/placeholders/home-delivery-chain.png", width: 750 })).toBe("/_optimized/placeholders/home-delivery-chain-960.webp");
    expect(imageLoader({ src: "/images/events/devcon-sea-2025.jpg", width: 320 })).toBe("/_optimized/images/events/devcon-sea-2025-320.webp");
  });

  test("caps requests above the largest variant", () => {
    setNodeEnv("production");
    const largest = widths[widths.length - 1];
    expect(imageLoader({ src: "/photos/company-team-room-photo.png", width: 3840 })).toBe(`/_optimized/photos/company-team-room-photo-${largest}.webp`);
  });

  test("leaves vector, remote, and development images on their original path", () => {
    setNodeEnv("production");
    expect(imageLoader({ src: "/brand/logo-wordmark.svg", width: 320 })).toBe("/brand/logo-wordmark.svg?w=320");
    expect(imageLoader({ src: "https://example.com/cover.png", width: 320 })).toBe("https://example.com/cover.png?w=320");

    setNodeEnv("development");
    expect(imageLoader({ src: "/placeholders/home-delivery-chain.png", width: 640 })).toBe("/placeholders/home-delivery-chain.png?w=640");
  });
});
