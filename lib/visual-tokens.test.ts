import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";

const projectRoot = process.cwd();

describe("visual tokens", () => {
  test("keeps large surfaces in an ElevenLabs-style near-white system", () => {
    const globals = readFileSync(join(projectRoot, "app", "globals.css"), "utf8");

    expect(globals).toContain("--rw-paper: #fdfcfc");
    expect(globals).toContain("--rw-ivory: #ffffff");
    expect(globals).toContain("--rw-inset-edge: inset 0 0 0 0.5px rgb(0 0 0 / 7.5%)");
    expect(globals).not.toContain("#fffdf8");
    expect(globals).not.toContain("#ece9e2");
    expect(globals).not.toContain("rgba(255, 253, 248");
  });

  test("applies the generated placeholders through a neo-engraved image treatment", () => {
    const globals = readFileSync(join(projectRoot, "app", "globals.css"), "utf8");
    const component = readFileSync(join(projectRoot, "components", "placeholder-image.tsx"), "utf8");

    expect(globals).toContain(".rw-engraving-lines");
    expect(globals).toContain("repeating-linear-gradient");
    expect(component).toContain("rw-engraving-lines");
  });

  test("keeps placeholder labels out of the visible production image frame", () => {
    const component = readFileSync(join(projectRoot, "components", "placeholder-image.tsx"), "utf8");

    expect(component).not.toContain("rw-image-caption");
    expect(component).not.toContain("figcaption");
  });

  test("uses inset product-panel edges instead of rails, bands, or heavy boxes", () => {
    const globals = readFileSync(join(projectRoot, "app", "globals.css"), "utf8");
    const header = readFileSync(join(projectRoot, "components", "site-header.tsx"), "utf8");
    const evidenceMatrix = readFileSync(join(projectRoot, "components", "evidence-matrix.tsx"), "utf8");
    const placeholderImage = readFileSync(join(projectRoot, "components", "placeholder-image.tsx"), "utf8");
    const pageSources = [
      "app/[locale]/page.tsx",
      "app/[locale]/services/page.tsx",
      "app/[locale]/melix/page.tsx",
      "app/[locale]/security/page.tsx",
      "app/[locale]/work/page.tsx",
      "app/[locale]/contact/page.tsx"
    ].map((path) => readFileSync(join(projectRoot, ...path.split("/")), "utf8")).join("\n");

    expect(globals).toContain("--rw-line-light: rgba(0, 0, 0, 0.04)");
    expect(globals).toContain("--rw-line-card: rgba(0, 0, 0, 0.07)");
    expect(globals).toContain("--rw-line-strong: rgba(0, 0, 0, 0.12)");
    expect(globals).toContain(".rw-obsidian-panel");
    expect(globals).toContain("box-shadow: var(--rw-inset-edge)");
    expect(header).toContain("border-b border-[var(--rw-line-light)]");
    expect(evidenceMatrix).toContain("rw-evidence-matrix");
    expect(placeholderImage).toContain("rw-image-fallback");

    expect(globals).not.toMatch(/^\.rw-section \{\n\s+border-top: 1px solid var\(--rw-line-light\);/m);
    expect(globals).not.toContain("main > .rw-section + .rw-section {\n  border-top");
    expect(globals).not.toContain(".rw-institutional-grid {\n  display: grid;\n  overflow: hidden;\n  border: 1px solid var(--rw-line-card);");
    expect(globals).not.toContain("box-shadow: 0 28px 90px rgb(5 5 5 / 8%)");
    expect(pageSources).not.toContain("rw-section rw-stone");
    expect(pageSources).not.toContain("rw-section rw-ink");
    expect(header).not.toContain("border-b border-[var(--rw-line)]");
    expect(evidenceMatrix).not.toContain("border border-[var(--rw-line)]");
    expect(placeholderImage).not.toContain("border-[var(--rw-line)] bg-[var(--rw-stone)]");
    expect(placeholderImage).not.toContain("relative overflow-hidden border");
  });

  test("uses restrained tiered block-section markers instead of every-section ornaments", () => {
    const globals = readFileSync(join(projectRoot, "app", "globals.css"), "utf8");
    const homePage = readFileSync(join(projectRoot, "app", "[locale]", "page.tsx"), "utf8");
    const servicesPage = readFileSync(join(projectRoot, "app", "[locale]", "services", "page.tsx"), "utf8");
    const institutionalGrid = readFileSync(join(projectRoot, "components", "institutional-grid.tsx"), "utf8");
    const evidenceMatrix = readFileSync(join(projectRoot, "components", "evidence-matrix.tsx"), "utf8");
    const placeholderImage = readFileSync(join(projectRoot, "components", "placeholder-image.tsx"), "utf8");

    expect(globals).toContain("--rw-section-rule-color: rgb(0 0 0 / 6%)");
    expect(globals).toContain("--rw-section-rail-color: rgb(0 0 0 / 3.5%)");
    expect(globals).toContain("--rw-section-marker-background: var(--rw-paper)");
    expect(globals).toContain("--rw-section-marker-size: 20px");
    expect(globals).toContain("--rw-section-marker-dot-size: 3px");
    expect(globals).toContain("--rw-section-marker-dot-color: rgb(0 0 0 / 45%)");
    expect(globals).toContain("--rw-section-rule-height: 1px");
    expect(globals).toContain("--rw-section-container-gutter");
    expect(globals).toContain("--rw-section-padding-y: 96px");
    expect(globals).toContain(".rw-section-major");
    expect(globals).toContain(".rw-section-supporting");
    expect(globals).toContain("padding-block: var(--rw-section-padding-y)");
    expect(globals).toContain("top: calc(-1 * var(--rw-section-padding-y))");
    expect(globals).toContain("left var(--rw-section-container-gutter) top / 1px 100% no-repeat");
    expect(globals).toContain("right var(--rw-section-container-gutter) top / 1px 100% no-repeat");
    expect(globals).toContain("main > .rw-section-lined::before");
    expect(globals).toContain("main > .rw-section-marked::before");
    expect(globals).toContain("main > .rw-section-marked > .rw-container");
    expect(globals).toContain("border-left: 1px solid var(--rw-section-rail-color)");
    expect(globals).toContain("border-right: 1px solid var(--rw-section-rail-color)");
    expect(globals).toContain("main > .rw-section-marked > .rw-container::before");
    expect(globals).toContain("main > .rw-section-marked > .rw-container::after");
    expect(globals).toContain("width: var(--rw-section-marker-size)");
    expect(globals).toContain("height: var(--rw-section-marker-size)");
    expect(globals).toContain("radial-gradient(circle, var(--rw-section-marker-dot-color) 0 calc(var(--rw-section-marker-dot-size) / 2)");
    expect(globals).toContain("transform: translate(-50%, -50%)");
    expect(globals).toContain("transform: translate(50%, -50%)");
    expect(globals).toContain("main > .rw-section-marked > .rw-container::before");
    expect(globals).toContain("display: none;");
    expect(homePage).toContain("rw-section-marked");
    expect(homePage).toContain("rw-section-lined");
    expect(homePage).toContain("rw-section-supporting");
    expect(servicesPage).toContain("rw-deliverable-groups");
    expect(servicesPage).toContain("rw-deliverable-group-details");
    expect(servicesPage).toContain("rw-deliverable-summary");
    expect(servicesPage).toContain("service.deliverables.slice(0, 3)");

    expect(globals).not.toContain("--rw-corner-dot");
    expect(globals).not.toContain(".rw-corner-box");
    expect(globals).not.toContain("rw-wide-rule");
    expect(globals).not.toContain("radial-gradient(circle at 0 0");
    expect(globals).not.toContain("radial-gradient(circle at 50% 50%");
    expect(globals).not.toContain("main > .rw-section + .rw-section::before");
    expect(globals).not.toContain("main > .rw-section + .rw-section > .rw-container");
    expect(institutionalGrid).not.toContain("rw-corner-box");
    expect(evidenceMatrix).not.toContain("rw-corner-box");
    expect(placeholderImage).not.toContain("rw-corner-box");
    expect(globals).not.toContain("main > .rw-section + .rw-section {\n  border-top");
    expect(globals).not.toContain("border-top: 1px solid var(--rw-line-light)");
  });

  test("keeps typography light and editorial instead of institutionally heavy", () => {
    const globals = readFileSync(join(projectRoot, "app", "globals.css"), "utf8");
    const header = readFileSync(join(projectRoot, "components", "site-header.tsx"), "utf8");
    const contactForm = readFileSync(join(projectRoot, "components", "contact-form.tsx"), "utf8");
    const pageSources = [
      "app/[locale]/page.tsx",
      "app/[locale]/services/page.tsx",
      "app/[locale]/melix/page.tsx",
      "app/[locale]/security/page.tsx",
      "app/[locale]/work/page.tsx",
      "app/[locale]/contact/page.tsx"
    ].map((path) => readFileSync(join(projectRoot, ...path.split("/")), "utf8")).join("\n");

    expect(globals).toContain("--rw-text-primary: rgb(5 5 5 / 88%)");
    expect(globals).toContain("--rw-text-secondary: rgb(5 5 5 / 64%)");
    expect(globals).toContain("--rw-text-tertiary: rgb(5 5 5 / 46%)");
    expect(globals).toContain("--rw-weight-label: 520");
    expect(globals).toContain("--rw-weight-card-title: 560");
    expect(globals).toContain("--rw-weight-section: 610");
    expect(globals).toContain("--rw-weight-hero: 640");
    expect(globals).toContain(".rw-display");
    expect(globals).toContain("font-weight: var(--rw-weight-hero)");
    expect(globals).toContain(".rw-heading");
    expect(globals).toContain("font-weight: var(--rw-weight-section)");
    expect(globals).toContain(".rw-button");
    expect(globals).toContain("font-weight: var(--rw-weight-card-title)");
    expect(globals).toContain(".rw-card .rw-subheading");
    expect(globals).toContain("font-size: 1.05rem");
    expect(globals).toContain(".rw-eyebrow");
    expect(globals).toContain("font-size: 0.68rem");
    expect(globals).toContain("color: var(--rw-text-tertiary)");
    expect(globals).toContain(".rw-body-large");
    expect(globals).toContain("font-size: 1.06rem");
    expect(globals).not.toMatch(/letter-spacing:\s*-/);
    expect(globals).not.toContain("font-weight: 700");
    expect(header).not.toContain("font-semibold");
    expect(contactForm).not.toContain("font-semibold");
    expect(pageSources).not.toContain("font-semibold");
  });
});
