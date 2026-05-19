import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { visualAssetIds, visualAssets } from "./visual-assets";

const projectRoot = process.cwd();

function pngDimensions(path: string) {
  const header = readFileSync(path).subarray(0, 24);
  return {
    width: header.readUInt32BE(16),
    height: header.readUInt32BE(20)
  };
}

describe("generated visual asset registry", () => {
  test("registers the full temporary visual set with files on disk", () => {
    expect(visualAssetIds).toHaveLength(24);
    expect(new Set(visualAssetIds).size).toBe(24);

    for (const id of visualAssetIds) {
      const asset = visualAssets[id];
      const filePath = join(projectRoot, "public", asset.src);
      expect(existsSync(filePath), `${id} should point to an existing temporary visual asset`).toBe(true);
      expect(`${asset.alt} ${asset.caption}`).toMatch(/placeholder|photo asset/i);
      expect(asset.replacementBrief.length).toBeGreaterThan(40);

      const { width, height } = pngDimensions(filePath);
      expect(width / height).toBeGreaterThan(1.49);
      expect(width / height).toBeLessThan(1.61);
    }
  });

  test("includes ChatGPT generated business-specific enrichment placeholders", () => {
    const generatedIds = [
      "home-constraint-matrix-board",
      "home-evidence-archive-scene",
      "home-technical-heritage-plate",
      "services-deployment-topology",
      "services-industry-patterns",
      "contact-first-review-tray",
      "security-access-control-diagram",
      "security-responsibility-handoff"
    ];

    for (const id of generatedIds) {
      expect(visualAssetIds).toContain(id as (typeof visualAssetIds)[number]);
      const asset = visualAssets[id as keyof typeof visualAssets];
      expect(asset.alt).toMatch(/ChatGPT generated placeholder/i);
      expect(asset.replacementBrief).toMatch(/approved|reviewed|real/i);
    }
  });

  test("uses a focused set of ChatGPT generated color photo assets for warmth", () => {
    const colorPhotoIds = [
      "home-hero-local-ai-boundary",
      "services-support",
      "work-case-wall",
      "contact-scoping-flow"
    ] as const;

    for (const id of colorPhotoIds) {
      const asset = visualAssets[id];
      expect(asset.src).toMatch(/^photos\/.+\.png$/);
      expect(asset.alt).toMatch(/ChatGPT generated color editorial photo/i);
      expect(asset.replacementBrief).toMatch(/photo|real/i);
      expect(existsSync(join(projectRoot, "public", asset.src)), `${id} should point to an existing color photo asset`).toBe(true);
    }
  });

  test("keeps generated placeholders free of fake proof claims", () => {
    const forbidden = /certified|soc 2|iso 27001|hipaa|fortune|customer logo|99\.|guaranteed/i;
    for (const id of visualAssetIds) {
      const asset = visualAssets[id];
      expect(`${asset.alt} ${asset.caption} ${asset.replacementBrief}`).not.toMatch(forbidden);
    }
  });
});
