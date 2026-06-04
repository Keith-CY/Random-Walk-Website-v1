import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";

const projectRoot = process.cwd();

describe("localized page shell", () => {
  test("uses a full-height flex shell so short pages keep the footer at the viewport edge", () => {
    const layout = readFileSync(join(projectRoot, "app", "[locale]", "layout.tsx"), "utf8");

    expect(layout).toContain("min-h-dvh");
    expect(layout).toContain("flex");
    expect(layout).toContain("flex-col");
    expect(layout).toContain("flex-1");
  });

  test("renders the root route as the English home page instead of a moved redirect", () => {
    const rootPage = readFileSync(join(projectRoot, "app", "page.tsx"), "utf8");
    const shell = readFileSync(join(projectRoot, "components", "localized-page-shell.tsx"), "utf8");

    expect(rootPage).toContain("HomePageContent");
    expect(rootPage).toContain("LocalizedPageShell");
    expect(shell).toContain("SiteHeader");
    expect(shell).toContain("SiteFooter");
    expect(rootPage).not.toContain("RedirectPage");
    expect(rootPage).not.toContain("httpEquiv=\"refresh\"");
    expect(rootPage).not.toContain("to=\"/en/\"");
  });

  test("keeps language switching on the current localized path", () => {
    const i18n = readFileSync(join(projectRoot, "lib", "i18n.ts"), "utf8");
    const header = readFileSync(join(projectRoot, "components", "site-header.tsx"), "utf8");

    expect(i18n).toContain("localizedPathForCurrentRoute");
    expect(header).toContain("usePathname");
    expect(header).toContain("localizedPathForCurrentRoute(item, pathname)");
    expect(header).not.toContain('href={localizePath(item, "/")}');
  });

  test("uses an icon language menu and padded footer interior", () => {
    const header = readFileSync(join(projectRoot, "components", "site-header.tsx"), "utf8");
    const footer = readFileSync(join(projectRoot, "components", "site-footer.tsx"), "utf8");
    const globals = readFileSync(join(projectRoot, "app", "globals.css"), "utf8");

    expect(header).toContain("rw-language-menu");
    expect(header).toContain("rw-icon-button");
    expect(header).toContain("aria-label=\"Change language\"");
    expect(footer).toContain("rw-footer-inner");
    expect(globals).toContain(".rw-footer-inner");
    expect(globals).toContain("padding-block: 64px 44px");
  });
});
