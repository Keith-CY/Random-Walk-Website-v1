import Link from "next/link";
import Image from "next/image";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const footerGroups = dictionary.footer.groups.map((group) => ({
    ...group,
    links: group.links.map((link) => {
      if (link.href === "/privacy") return { ...link, label: dictionary.legal.privacy };
      if (link.href === "/terms") return { ...link, label: dictionary.legal.terms };
      return link;
    })
  }));

  return (
    <footer className="rw-ink border-t border-[rgba(255,255,255,0.12)]">
      <div className="rw-container rw-footer-inner">
        <div className="rw-footer-top">
          <div className="rw-footer-brand">
            <Image src="/brand/logo-wordmark.svg" alt="Random Walk" width={220} height={34} className="rw-footer-logo h-auto w-[220px] invert" />
            <p className="rw-body mt-5 max-w-md">
              {dictionary.footer.description}
            </p>
          </div>
          <nav className="rw-footer-links" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div className="rw-footer-link-group" key={group.title}>
                <p className="rw-eyebrow">{group.title}</p>
                <ul>
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.href}-${link.label}`}>
                      <Link href={localizePath(locale, link.href)}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="rw-footer-manifesto" aria-label="Company notice">
          <p>{dictionary.footer.manifesto}</p>
          <p className="rw-footer-copyright">{dictionary.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
