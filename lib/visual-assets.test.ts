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
    expect(visualAssetIds).toHaveLength(26);
    expect(new Set(visualAssetIds).size).toBe(26);

    for (const id of visualAssetIds) {
      const asset = visualAssets[id];
      const filePath = join(projectRoot, "public", asset.src);
      expect(existsSync(filePath), `${id} should point to an existing temporary visual asset`).toBe(true);
      expect(`${asset.alt} ${asset.caption}`).toMatch(/placeholder|photo asset|neo-engraved asset/i);
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

  test("reserves Titan-inspired photo assets for the company introduction", () => {
    const colorPhotoIds = visualAssetIds.filter((id) => visualAssets[id].src.startsWith("photos/"));

    for (const id of colorPhotoIds) {
      const asset = visualAssets[id];
      expect(asset.src).toMatch(/^photos\/.+\.png$/);
      expect(id).toMatch(/^company-team-/);
      expect(asset.alt).toMatch(/Titan-inspired|Asian technology team/i);
      expect(asset.replacementBrief).toMatch(/Random Walk team|team culture/i);
      expect(existsSync(join(projectRoot, "public", asset.src)), `${id} should point to an existing team photo asset`).toBe(true);
    }
  });

  test("uses Titan-inspired urban neo-engraved brand images for high-visibility non-company slots", () => {
    const titanInspiredIds = [
      "home-hero-local-ai-boundary",
      "services-support",
      "work-case-wall",
      "contact-scoping-flow"
    ] as const;

    for (const id of titanInspiredIds) {
      const asset = visualAssets[id];
      expect(asset.src).toMatch(/^placeholders\/brand\/.+\.png$/);
      expect(`${asset.alt} ${asset.caption} ${asset.replacementBrief}`).toMatch(/Titan-inspired|city|urban|architecture|path|plaza|courtyard|threshold|institutional/i);
      expect(`${asset.alt} ${asset.caption}`).not.toMatch(/Roman|sculpture|bust|philosophical study|business workflow|color editorial photo|support workflow|scoping table/i);
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
