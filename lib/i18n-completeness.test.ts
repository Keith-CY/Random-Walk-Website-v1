import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { dictionaries, locales } from "./i18n";

const projectRoot = process.cwd();
const localizedLocales = ["zh", "ja", "ko"] as const;

function readSource(path: string) {
  return readFileSync(join(projectRoot, ...path.split("/")), "utf8");
}

function readContentFiles(type: "notes" | "work", locale: string) {
  const dir = join(projectRoot, "content", type, locale);
  return readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => [join(dir, file), readFileSync(join(dir, file), "utf8")] as const);
}

describe("i18n completeness", () => {
  test("gives all interactive links and disclosure controls pointer affordance", () => {
    const globals = readSource("app/globals.css");

    expect(globals).toContain("a[href]");
    expect(globals).toContain("button:not(:disabled)");
    expect(globals).toContain("summary");
    expect(globals).toContain("cursor: pointer");
  });

  test("renders privacy and terms from locale-aware detailed legal content", () => {
    const legal = readSource("lib/legal-content.ts");
    const privacyPage = readSource("app/[locale]/privacy/page.tsx");
    const termsPage = readSource("app/[locale]/terms/page.tsx");

    for (const locale of locales) {
      expect(legal).toContain(`${locale}:`);
    }

    expect(legal).toContain("contact-form confidentiality");
    expect(legal).toContain("separate written agreements");
    expect(legal).toContain("customer-controlled deployment");
    expect(privacyPage).toContain("legalContent.privacy[locale]");
    expect(termsPage).toContain("legalContent.terms[locale]");
  });

  test("keeps shell brand descriptors in the active locale", () => {
    expect(dictionaries.en.common.brandDescriptor).toBe("Local AI Infrastructure");
    expect(dictionaries.zh.common.brandDescriptor).toBe("本地 AI 基础设施");
    expect(dictionaries.ja.common.brandDescriptor).toBe("ローカル AI 基盤");
    expect(dictionaries.ko.common.brandDescriptor).toBe("로컬 AI 인프라");
  });

  test("localizes page data, footer labels, and contact form copy instead of hardcoding English UI", () => {
    const sources = [
      "lib/site-data.ts",
      "components/contact-form.tsx",
      "components/site-footer.tsx",
      "app/[locale]/services/page.tsx",
      "app/[locale]/security/page.tsx",
      "app/[locale]/contact/page.tsx",
      "app/[locale]/melix/page.tsx",
      "app/[locale]/work/page.tsx",
      "app/[locale]/notes/page.tsx"
    ].map(readSource).join("\n");
    const pageSources = [
      "components/site-footer.tsx",
      "components/redirect-page.tsx",
      "app/[locale]/services/page.tsx",
      "app/[locale]/security/page.tsx",
      "app/[locale]/contact/page.tsx",
      "app/[locale]/melix/page.tsx",
      "app/[locale]/work/page.tsx",
      "app/[locale]/notes/page.tsx"
    ].map(readSource).join("\n");

    expect(sources).toContain("localizedServiceModules");
    expect(sources).toContain("localizedDeploymentModes");
    expect(sources).toContain("localizedEvidenceArtifacts");
    expect(sources).toContain("contactFormCopy[locale]");
    expect(sources).toContain("copy.options.air_gapped_required");
    expect(sources).toContain("copy.options.timeline");
    expect(sources).toContain("dictionary.footer");
    expect(sources).toContain("dictionary.legal.privacy");
    expect(pageSources).toContain("redirectCopy");

    const hardcodedPhrases = [
      "What happens next",
      "Industry entry points for private model systems.",
      "Scope a security review",
      "Local AI runtime for controlled workstations.",
      "Notes on local AI infrastructure.",
      "Applied work in private AI systems."
    ];

    for (const phrase of hardcodedPhrases) {
      expect(pageSources).not.toContain(phrase);
    }
  });

  test("removes obvious English headings and deliverable labels from localized MDX files", () => {
    for (const locale of localizedLocales) {
      const files = [...readContentFiles("notes", locale), ...readContentFiles("work", locale)];
      for (const [file, source] of files) {
        expect(source, file).not.toContain("## Problem");
        expect(source, file).not.toContain("Approved ");
        expect(source, file).not.toContain("Evidence Pack");
        expect(source, file).not.toContain("Evaluation Report");
        expect(source, file).not.toContain("Deployment Runbook");
        expect(source, file).not.toContain("Local product workflow");
        expect(source, file).not.toContain("Privacy-first UX");
      }
    }
  });
});
