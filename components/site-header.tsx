"use client";

import { usePathname } from "next/navigation";
import { SiteNav } from "@/components/site/site-nav";
import type { Locale } from "@/lib/i18n";
import type { SiteCopy } from "@/lib/site-copy";

// The home page carries its own navigation inside the painting, so the page header steps aside there.
const homePath = /^\/(?:(?:en|zh|ja|ko)\/?)?$/;

export function SiteHeader({ locale, nav }: { locale: Locale; nav: SiteCopy["nav"] }) {
  const pathname = usePathname() ?? "/";
  if (homePath.test(pathname)) return null;

  return (
    <header className="s-header">
      <SiteNav locale={locale} copy={nav} />
    </header>
  );
}
