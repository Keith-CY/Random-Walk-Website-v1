import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import {
  creationDetailPages,
  creationDetailSlugs,
  legalDetailPages,
  resourceDetailPages,
  serviceDetailPages,
  standaloneDetailPages,
  type DetailPageCopy
} from "./footer-detail-pages";
import { locales } from "./i18n";
import { homeConstraintItems } from "./site-data";

// Positioning guidance written for the team ("do not overclaim", "should be positioned as")
// must never render on public pages.
const internalGuidance = [
  /overclaim/i,
  /should (be positioned|read as|be understood|stay tied)/i,
  /do not (position|describe|reduce|claim|lead with)/i,
  /intentionally distinct from/i,
  /must not imply|case status|案例状态|ケースステータス|사례 상태/i,
  /过度表达|不要将|应定位为/,
  /過度に主張|位置づけないこと|説明しないこと/,
  /과장하지 않을|포지셔닝해야|설명하지 마십시오/
];

function publicText(copy: DetailPageCopy) {
  return [
    copy.title,
    copy.description,
    copy.notice ?? "",
    ...copy.sections.flatMap((section) => [section.eyebrow ?? "", section.title, section.description, ...section.points])
  ].join("\n");
}

describe("public copy", () => {
  test("detail pages do not publish internal positioning guidance", () => {
    const collections = [serviceDetailPages, creationDetailPages, resourceDetailPages, legalDetailPages, standaloneDetailPages];

    for (const locale of locales) {
      for (const collection of collections) {
        for (const [slug, copy] of Object.entries(collection[locale])) {
          const text = publicText(copy as DetailPageCopy);
          for (const pattern of internalGuidance) {
            expect(text, `${locale}/${slug} matches ${pattern}`).not.toMatch(pattern);
          }
        }
      }
    }
  });

  test("work and notes content does not publish internal guidance", () => {
    for (const type of ["work", "notes"]) {
      for (const locale of locales) {
        const dir = join(process.cwd(), "content", type, locale);
        for (const file of readdirSync(dir).filter((name) => name.endsWith(".mdx"))) {
          const body = readFileSync(join(dir, file), "utf8").split(/^---$/m).slice(2).join("---");
          for (const pattern of internalGuidance) {
            expect(body, `${type}/${locale}/${file} matches ${pattern}`).not.toMatch(pattern);
          }
        }
      }
    }
  });

  test("creation pages keep their customer-facing sections", () => {
    for (const locale of locales) {
      for (const slug of creationDetailSlugs) {
        expect(creationDetailPages[locale][slug].sections.length, `${locale}/${slug}`).toBeGreaterThanOrEqual(2);
      }
    }
  });

  test("home constraint cards each carry their own description", () => {
    for (const locale of locales) {
      const descriptions = homeConstraintItems[locale].map((item) => item.description);
      expect(new Set(descriptions).size, locale).toBe(descriptions.length);
    }
  });
});
