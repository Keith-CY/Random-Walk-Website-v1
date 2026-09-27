import Link from "next/link";
import { localizePath, type Locale } from "@/lib/i18n";
import { getSiteCopy } from "@/lib/site-copy";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale).footer;

  return (
    <footer className="s-footer">
      <div className="s-wrap">
        <div className="s-footer-top">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-wordmark.svg" alt="Random Walk" width={170} height={30} />
            <p>{copy.line}</p>
          </div>
          <nav className="s-footer-groups" aria-label="Footer">
            {copy.groups.map((group) => (
              <div key={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={localizePath(locale, link.href)}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="s-footer-base">
          <span>{copy.copyright}</span>
          <span>{copy.credits}</span>
        </div>
      </div>
    </footer>
  );
}
