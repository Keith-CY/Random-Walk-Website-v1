"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languageName, locales, localizePath, localizedPathForCurrentRoute, type Locale } from "@/lib/i18n";
import type { SiteCopy } from "@/lib/site-copy";

function isCurrent(pathname: string, locale: Locale, href: string) {
  const target = localizePath(locale, href);
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function SiteNav({ locale, copy, tone = "paper" }: { locale: Locale; copy: SiteCopy["nav"]; tone?: "paper" | "night" }) {
  const pathname = usePathname() ?? "/";

  const languages = (
    <details className="s-nav-menu">
      <summary aria-label={copy.language}>{locale.toUpperCase()}</summary>
      <div className="s-nav-pop">
        {locales.map((item) => (
          <Link key={item} href={localizedPathForCurrentRoute(item, pathname)} aria-current={item === locale ? "true" : undefined} lang={item}>
            <span>{languageName(item)}</span>
            <span className="s-caption">{item.toUpperCase()}</span>
          </Link>
        ))}
      </div>
    </details>
  );

  return (
    <div className="s-nav" data-tone={tone}>
      <Link href={localizePath(locale, "/")} className="s-nav-logo" aria-label={copy.home}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/logo-wordmark.svg" alt="Random Walk" width={150} height={26} />
      </Link>
      <nav className="s-nav-links" aria-label={copy.primary}>
        {copy.items.map((item) => (
          <Link key={item.href} href={localizePath(locale, item.href)} aria-current={isCurrent(pathname, locale, item.href) ? "page" : undefined}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="s-nav-actions">
        {languages}
        <Link href={localizePath(locale, "/contact")} className="s-btn">
          {copy.cta}
        </Link>
        <details className="s-nav-menu s-nav-mobile">
          <summary>{copy.menu}</summary>
          <div className="s-nav-pop">
            {copy.items.map((item) => (
              <Link key={item.href} href={localizePath(locale, item.href)}>
                {item.label}
              </Link>
            ))}
            <Link href={localizePath(locale, "/contact")}>{copy.cta}</Link>
          </div>
        </details>
      </div>
    </div>
  );
}
