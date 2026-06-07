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
    expect(visualAssetIds).toHaveLength(34);
    expect(new Set(visualAssetIds).size).toBe(34);

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
      expect(`${asset.alt} ${asset.caption}`).toMatch(/placeholder|photo asset|product cover asset|neo-engraved asset/i);
      expect(asset.replacementBrief.length).toBeGreaterThan(40);

      const { width, height } = pngDimensions(filePath);
      const aspectRatio = width / height;
      const isWorkflowTrack = asset.src.includes("workflow-track");
      expect(aspectRatio).toBeGreaterThan(1.49);
      expect(aspectRatio).toBeLessThan(isWorkflowTrack ? 5.1 : asset.src.startsWith("images/product-covers/") ? 1.85 : 1.61);
    }
  });

  test("includes ChatGPT generated business-specific enrichment placeholders", () => {
    const generatedIds = [
      "home-constraint-matrix-board",
      "home-evidence-archive-scene",
      "home-technical-heritage-plate",
      "home-melix-workflow-track",
      "home-services-workflow-track",
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

  test("uses the single-object neo-engraved direction for non-workflow placeholders", () => {
    const nonMediaPlaceholderIds = visualAssetIds.filter((id) => {
      const src = visualAssets[id].src;
      return !src.includes("workflow-track") && !src.startsWith("photos/") && !src.startsWith("images/product-covers/") && !src.startsWith("http://") && !src.startsWith("https://");
    });

    for (const id of nonMediaPlaceholderIds) {
      const asset = visualAssets[id];
      expect(`${asset.alt} ${asset.caption}`).toMatch(/neo-engraved/i);
      expect(`${asset.alt} ${asset.caption}`).not.toMatch(/scene|composite|dashboard|full building|city street|workflow illustration/i);
    }
  });

  test("uses flat silicon-trace diagrams for workflow rail placeholders", () => {
    for (const id of ["home-melix-workflow-track", "home-services-workflow-track"] as const) {
      const asset = visualAssets[id];
      expect(`${asset.alt} ${asset.caption}`).toMatch(/flat|silicon-trace|workflow trace/i);
      expect(`${asset.alt} ${asset.caption}`).not.toMatch(/neo-engraved|classical|stone/i);
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
