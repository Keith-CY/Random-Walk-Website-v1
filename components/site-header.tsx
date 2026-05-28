"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getDictionary, languageName, locales, localizePath, localizedPathForCurrentRoute, type Locale } from "@/lib/i18n";

const navItems = [
  ["company", "/company"],
  ["services", "/services"],
  ["creations", "/creations"],
  ["work", "/work"],
  ["notes", "/notes"],
  ["security", "/security"],
  ["contact", "/contact"]
] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rw-line-light)] bg-[rgba(255,255,255,0.94)] backdrop-blur">
      <div className="rw-container flex min-h-[var(--rw-header-height)] items-center justify-between gap-4">
        <Link href={localizePath(locale, "/")} className="flex min-w-0 items-center" aria-label="Random Walk home">
          <span className="flex min-w-0 flex-col">
            <Image src="/brand/logo-wordmark.svg" alt="Random Walk" width={150} height={26} priority className="h-6 w-auto object-contain object-left" />
            <span className="rw-caption leading-none">{dictionary.common.brandDescriptor}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navItems.map(([key, href]) => (
            <Link key={key} href={localizePath(locale, href)} className="text-sm font-medium text-[var(--rw-text-secondary)] hover:text-[var(--rw-text-primary)]">
              {dictionary.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <details className="rw-language-menu">
            <summary className="rw-icon-button" aria-label="Change language">
              <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.3 2.4 3.5 5.4 3.5 9s-1.2 6.6-3.5 9M12 3C9.7 5.4 8.5 8.4 8.5 12s1.2 6.6 3.5 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </summary>
            <div className="rw-language-popover" aria-label="Language switcher">
              {locales.map((item) => (
                <Link key={item} href={localizedPathForCurrentRoute(item, pathname)} className={`rw-language-option ${item === locale ? "rw-language-option-active" : ""}`}>
                  <span>{item.toUpperCase()}</span>
                  <span>{languageName(item)}</span>
                </Link>
              ))}
            </div>
          </details>
          <Link href={localizePath(locale, "/contact")} className="rw-button rw-button-primary">
            {dictionary.cta.primary}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <details className="rw-language-menu">
            <summary className="rw-icon-button" aria-label="Change language">
              <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.3 2.4 3.5 5.4 3.5 9s-1.2 6.6-3.5 9M12 3C9.7 5.4 8.5 8.4 8.5 12s1.2 6.6 3.5 9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </summary>
            <div className="rw-language-popover" aria-label="Language switcher">
              {locales.map((item) => (
                <Link key={item} href={localizedPathForCurrentRoute(item, pathname)} className={`rw-language-option ${item === locale ? "rw-language-option-active" : ""}`}>
                  <span>{item.toUpperCase()}</span>
                  <span>{languageName(item)}</span>
                </Link>
              ))}
            </div>
          </details>

          <details className="relative">
            <summary className="rw-button rw-button-secondary cursor-pointer list-none">Menu</summary>
            <div className="absolute right-0 mt-3 w-[min(82vw,320px)] border border-[var(--rw-line-light)] bg-[var(--rw-paper)] p-4 shadow-[0_18px_55px_rgba(5,5,5,0.08)]">
              <nav className="grid gap-3" aria-label="Mobile navigation">
                {navItems.map(([key, href]) => (
                  <Link key={key} href={localizePath(locale, href)} className="text-base font-medium">
                    {dictionary.nav[key]}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
