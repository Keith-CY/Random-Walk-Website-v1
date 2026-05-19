import Link from "next/link";
import Image from "next/image";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <footer className="rw-ink border-t border-[rgba(255,255,255,0.12)]">
      <div className="rw-container rw-footer-inner">
        <div className="rw-grid">
          <div className="col-span-12 lg:col-span-5">
            <Image src="/brand/logo-wordmark.svg" alt="Random Walk" width={220} height={34} className="rw-footer-logo h-auto w-[220px] invert" />
            <p className="rw-body mt-5 max-w-md">
              {dictionary.footer.description}
            </p>
          </div>
          <div className="col-span-6 grid gap-3 lg:col-span-2">
            <p className="rw-eyebrow">{dictionary.footer.site}</p>
            <Link href={localizePath(locale, "/services")}>{dictionary.nav.services}</Link>
            <Link href={localizePath(locale, "/melix")}>{dictionary.nav.melix}</Link>
            <Link href={localizePath(locale, "/security")}>{dictionary.nav.security}</Link>
          </div>
          <div className="col-span-6 grid gap-3 lg:col-span-2">
            <p className="rw-eyebrow">{dictionary.footer.company}</p>
            <Link href={localizePath(locale, "/work")}>{dictionary.nav.work}</Link>
            <Link href={localizePath(locale, "/notes")}>{dictionary.nav.notes}</Link>
            <Link href={localizePath(locale, "/contact")}>{dictionary.nav.contact}</Link>
          </div>
          <div className="col-span-12 grid gap-3 lg:col-span-3">
            <p className="rw-eyebrow">{dictionary.footer.legal}</p>
            <Link href={localizePath(locale, "/privacy")}>{dictionary.legal.privacy}</Link>
            <Link href={localizePath(locale, "/terms")}>{dictionary.legal.terms}</Link>
            <p className="rw-caption">© 2026 Random Walk 株式会社.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
