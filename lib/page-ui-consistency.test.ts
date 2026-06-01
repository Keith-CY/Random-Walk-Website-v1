import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";

const projectRoot = process.cwd();

function readSource(path: string) {
  return readFileSync(join(projectRoot, ...path.split("/")), "utf8");
}

describe("page UI consistency", () => {
  test("uses institutional grids for non-home index pages that list services, evidence, cases, or notes", () => {
    const pages = [
      "app/[locale]/security/page.tsx",
      "app/[locale]/company/page.tsx",
      "app/[locale]/work/page.tsx",
      "app/[locale]/contact/page.tsx",
      "app/[locale]/notes/page.tsx"
    ];

    for (const page of pages) {
      const source = readSource(page);
      expect(source).toContain("InstitutionalGrid");
      expect(source).toContain("InstitutionalCell");
    }
  });

  test("keeps remaining content pages off decorative chip rows", () => {
    const pages = [
      "app/[locale]/security/page.tsx",
      "app/[locale]/company/page.tsx",
      "app/[locale]/work/page.tsx",
      "app/[locale]/work/[slug]/page.tsx",
      "app/[locale]/contact/page.tsx",
      "app/[locale]/notes/page.tsx"
    ];

    for (const page of pages) {
      expect(readSource(page)).not.toContain("rw-chip");
    }
  });

  test("renders contact inputs as form fields rather than lifted cards", () => {
    const form = readSource("components/contact-form.tsx");

    expect(form).toContain("rw-field");
    expect(form).toContain("rw-fieldset");
    expect(form).toContain("rw-field-error");
    expect(form).toContain("aria-invalid");
    expect(form).toContain("rw-form-toast");
    expect(form).toContain('role="status"');
    expect(form).not.toContain("rw-form-status-ok");
    expect(form).not.toContain("rw-card bg-[var(--rw-ivory)]");
    expect(form).not.toContain("rw-card min-h");
  });

  test("gives legal and long-form pages a restrained editorial panel", () => {
    const pages = [
      "app/[locale]/privacy/page.tsx",
      "app/[locale]/terms/page.tsx",
      "app/[locale]/notes/[slug]/page.tsx"
    ];

    for (const page of pages) {
      expect(readSource(page)).toContain("rw-legal-panel");
    }
  });

  test("keeps enterprise copy customer-facing and conservative", () => {
    const sources = [
      "app/[locale]/layout.tsx",
      "app/[locale]/security/page.tsx",
      "app/[locale]/work/page.tsx",
      "app/[locale]/contact/page.tsx",
      "app/[locale]/notes/page.tsx",
      "app/[locale]/terms/page.tsx",
      "components/contact-form.tsx",
      "components/site-footer.tsx",
      "lib/metadata.ts",
      "lib/site-data.ts",
      "app/[locale]/company/page.tsx",
      "content/work/en/finance-regulated-records.mdx",
      "content/work/en/legal-ip-private-model.mdx",
      "content/work/en/manufacturing-edge-ai.mdx",
      "content/work/en/sayit.mdx",
      "content/notes/en/evaluate-local-lora.mdx",
      "content/notes/en/private-deployment-boundaries.mdx"
    ];
    const combined = sources.map((source) => readSource(source)).join("\n");
    const bannedPhrases = [
      "proof point",
      "case templates",
      "Placeholder case template",
      "case-study template",
      "Placeholder cases stay labeled",
      "legal certification by slogan",
      "someone else&apos;s training context",
      "cannot send confidential data to the cloud",
      "cannot move sensitive data to the cloud",
      "protected review channel",
      "Prepare email request",
      "legal privileged material",
      "Proof value"
    ];

    for (const phrase of bannedPhrases) {
      expect(combined.toLowerCase()).not.toContain(phrase.toLowerCase());
    }

    expect(combined).toContain("Controlled infrastructure for private AI systems.");
    expect(combined).toContain("Security is delivery structure, not an add-on.");
    expect(combined).toContain("Build AI systems that stay under your control.");
    expect(combined).toContain("FDE (Forward Deployed Engineering, on-site engineering collaboration)");
    expect(combined).toContain("Private AI projects with boundaries and evidence.");
    expect(combined).toContain("Example patterns, not customer disclosures.");
    expect(combined).toContain("Bring a concrete model problem.");
    expect(combined).toContain("Technical notes from private AI systems work.");
    expect(combined).toContain("Define the project before we decide to work together.");
  });

  test("describes unpublished work as approval-pending engagement material", () => {
    const workIndex = readSource("app/[locale]/work/page.tsx");
    const workDetail = readSource("app/[locale]/work/[slug]/page.tsx");
    const siteData = readSource("lib/site-data.ts");
    const combined = `${workIndex}\n${workDetail}`;

    expect(siteData).toContain("public material pending approval");
    expect(combined).toContain("workStatusLabel(locale");
    expect(combined).not.toContain('getString(entry.frontmatter, "status", "placeholder")} ·');
  });

  test("applies reviewed page-level refinements beyond home and services", () => {
    const globals = readSource("app/globals.css");
    const melixPage = readSource("app/[locale]/melix/page.tsx");
    const visualTabs = readSource("components/visual-tabs.tsx");
    const workDetail = readSource("app/[locale]/work/[slug]/page.tsx");
    const noteDetail = readSource("app/[locale]/notes/[slug]/page.tsx");
    const notesPage = readSource("app/[locale]/notes/page.tsx");
    const contactForm = readSource("components/contact-form.tsx");
    const footer = readSource("components/site-footer.tsx");
    const privacyPage = readSource("app/[locale]/privacy/page.tsx");
    const termsPage = readSource("app/[locale]/terms/page.tsx");

    expect(globals).toContain(".rw-ink .rw-heading");
    expect(globals).toContain("color: var(--rw-text-inverse-primary)");
    expect(visualTabs).toContain("showVisual = true");
    expect(visualTabs).toContain("showVisual ? <PlaceholderImage");
    expect(melixPage).toContain("RedirectPage");
    expect(melixPage).toContain("/creations/melix/");
    expect(workDetail).toContain("rw-metadata-strip");
    expect(workDetail).toContain("copy.detailLabels.disclosure");
    expect(noteDetail).toContain("rw-metadata-strip");
    expect(noteDetail).toContain("copy.detailLabels.technicalNote");
    expect(notesPage).toContain("rw-note-topics");
    expect(contactForm).toContain("rw-form-section-label");
    expect(contactForm).toContain("copy.sections.sensitivitySupport");
    expect(privacyPage).toContain("rw-legal-content");
    expect(termsPage).toContain("rw-legal-content");
    expect(footer).toContain("rw-footer-logo");
    expect(globals).toContain(".rw-footer-logo");
    expect(footer).toContain("rw-footer-links");
    expect(footer).toContain("rw-footer-manifesto");
    expect(footer).toContain("dictionary.footer.groups");
  });

  test("keeps team photography on the company page and abstract brand images elsewhere", () => {
    const companyPage = readSource("app/[locale]/company/page.tsx");
    const homePage = readSource("app/[locale]/page.tsx");
    const servicesPage = readSource("app/[locale]/services/page.tsx");
    const workPage = readSource("app/[locale]/work/page.tsx");
    const contactPage = readSource("app/[locale]/contact/page.tsx");

    expect(companyPage).toContain("company-team-panel-photo");
    expect(companyPage).toContain("company-team-room-photo");
    expect(companyPage).toContain("companyPhilosophyVisualItems");
    expect(homePage).not.toContain("company-team-panel-photo");
    expect(servicesPage).not.toContain("company-team-room-photo");
    expect(workPage).not.toContain("company-team-panel-photo");
    expect(contactPage).not.toContain("company-team-room-photo");
  });

  test("adds richer image cadence and restrained motion without new dependencies", () => {
    const globals = readSource("app/globals.css");
    const homePage = readSource("components/home-page-content.tsx");
    const layout = readSource("app/[locale]/layout.tsx");
    const motionController = readSource("components/motion-controller.tsx");
    const servicesPage = readSource("app/[locale]/services/page.tsx");
    const securityPage = readSource("app/[locale]/security/page.tsx");
    const contactPage = readSource("app/[locale]/contact/page.tsx");
    const visualTabs = readSource("components/visual-tabs.tsx");
    const visualAssets = readSource("lib/visual-assets.ts");

    expect(homePage).toContain("homeWorkflowVisualItems");
    expect(homePage).toContain("const workflowVisualItems = homeWorkflowVisualItems[locale]");
    expect(homePage).toContain("<VisualTabs items={workflowVisualItems}");
    expect(homePage).toContain("home-constraint-matrix-board");
    expect(homePage).toContain("home-evidence-archive-scene");
    expect(homePage).toContain("home-technical-heritage-plate");
    expect(homePage).toContain("rw-visual-strip");
    expect(homePage).toContain("rw-card-media");
    expect(servicesPage).toContain("services-deployment-topology");
    expect(servicesPage).toContain("services-industry-patterns");
    expect(securityPage).toContain("security-access-control-diagram");
    expect(securityPage).toContain("security-responsibility-handoff");
    expect(contactPage).toContain("contact-first-review-tray");
    expect(contactPage).toContain("rw-contact-review-band");
    expect(visualAssets).toContain("ChatGPT generated placeholder");
    expect(layout).toContain("<MotionController />");
    expect(motionController).toContain("IntersectionObserver");
    expect(motionController).toContain("prefers-reduced-motion: reduce");
    expect(motionController).toContain("rw-motion-reveal");
    expect(visualTabs).toContain("key={active.label}");
    expect(globals).toContain(".rw-visual-strip");
    expect(globals).toContain(".rw-card-media");
    expect(globals).toContain(".rw-cta-watermark");
    expect(globals).toContain(".rw-motion-ready .rw-motion-reveal");
    expect(globals).toContain("@keyframes rw-image-breathe");
    expect(globals).toContain("@keyframes rw-tab-panel-enter");
    expect(globals).toContain("@media (prefers-reduced-motion: reduce)");
    expect(globals).toContain("animation: none !important");
  });
});
