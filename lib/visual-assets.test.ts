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
    expect(visualAssetIds).toHaveLength(38);
    expect(new Set(visualAssetIds).size).toBe(38);

    for (const id of visualAssetIds) {
      const asset = visualAssets[id];
      const isExternal = asset.src.startsWith("http://") || asset.src.startsWith("https://");
      if (isExternal) {
        expect(`${asset.alt} ${asset.caption}`).toMatch(/neo-engraved asset/i);
        expect(asset.replacementBrief.length).toBeGreaterThan(40);
        continue;
      }

      const filePath = join(projectRoot, "public", asset.src);
      expect(existsSync(filePath), `${id} should point to an existing temporary visual asset`).toBe(true);
      expect(`${asset.alt} ${asset.caption}`).toMatch(/placeholder|photo asset|product cover asset|event image|neo-engraved asset/i);
      expect(asset.replacementBrief.length).toBeGreaterThan(40);

      if (asset.src.startsWith("images/events/")) {
        expect(asset.src).toMatch(/^images\/events\/.+\.jpg$/);
        continue;
      }

      const { width, height } = pngDimensions(filePath);
      const aspectRatio = width / height;
      expect(aspectRatio).toBeGreaterThan(1.49);
      expect(aspectRatio).toBeLessThan(asset.src.startsWith("images/product-covers/") ? 1.85 : 1.61);
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

  test("uses Titan-inspired classical neo-engraved brand images for high-visibility non-company slots", () => {
    const titanInspiredIds = [
      "home-hero-local-ai-boundary",
      "services-support",
      "work-case-wall",
      "contact-scoping-flow"
    ] as const;

    for (const id of titanInspiredIds) {
      const asset = visualAssets[id];
      expect(asset.src).toMatch(/^placeholders\/brand\/.+\.png$/);
      expect(`${asset.alt} ${asset.caption} ${asset.replacementBrief}`).toMatch(/Titan-inspired|neo-engraved|classical|philosopher|bust|ledger|archive|vault|column|Ionic|facade|building|enterprise|institutional|judgement|evidence|confidentiality/i);
      expect(`${asset.alt} ${asset.caption}`).not.toMatch(/city path|urban|plaza|business workflow|color editorial photo|support workflow|scoping table/i);
    }
  });

  test("uses the single-object neo-engraved direction for every non-media placeholder", () => {
    const nonMediaPlaceholderIds = visualAssetIds.filter((id) => {
      const src = visualAssets[id].src;
      return !src.startsWith("photos/") && !src.startsWith("images/product-covers/") && !src.startsWith("images/events/") && !src.startsWith("http://") && !src.startsWith("https://");
    });

    for (const id of nonMediaPlaceholderIds) {
      const asset = visualAssets[id];
      expect(`${asset.alt} ${asset.caption}`).toMatch(/neo-engraved/i);
      expect(`${asset.alt} ${asset.caption}`).not.toMatch(/scene|composite|dashboard|full building|city street|workflow illustration/i);
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
