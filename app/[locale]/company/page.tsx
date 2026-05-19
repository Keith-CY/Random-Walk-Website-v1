import Link from "next/link";
import { InstitutionalCell, InstitutionalGrid } from "@/components/institutional-grid";
import { PlaceholderImage } from "@/components/placeholder-image";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { companyPageCopy, companyPhilosophyVisualItems } from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = companyPageCopy[rawLocale];
  return localizedMetadata(rawLocale, "/company", copy.hero.title, copy.hero.description);
}

export default async function CompanyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);
  const copy = companyPageCopy[locale];
  const visualItems = companyPhilosophyVisualItems[locale];

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-5">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="rw-page-title mt-5">{copy.hero.title}</h1>
            <p className="rw-body-large mt-6">{copy.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rw-button rw-button-primary" href={localizePath(locale, "/contact")}>{copy.ctaLabel}</Link>
              <Link className="rw-button rw-button-secondary" href={localizePath(locale, "/work")}>{dictionary.nav.work}</Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <PlaceholderImage assetId="company-team-panel-photo" label="Asian team panel discussion" ratio="16 / 10" priority />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage assetId="company-team-room-photo" label="Asian team discussion room" ratio="16 / 10" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SectionHeading copy={copy.team} />
            <InstitutionalGrid columns={3} className="mt-8">
              {copy.stats.map((stat) => (
                <InstitutionalCell key={stat.label}>
                  <p className="rw-caption">{stat.label}</p>
                  <p className="mt-3 text-base font-medium text-[var(--rw-text-primary)]">{stat.value}</p>
                </InstitutionalCell>
              ))}
            </InstitutionalGrid>
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container">
          <SectionHeading copy={copy.philosophy} />
          <InstitutionalGrid columns={2} className="mt-10">
            {visualItems.map((item) => (
              <InstitutionalCell key={item.label}>
                <div className="rw-card-media">
                  <PlaceholderImage assetId={item.assetId} ratio="16 / 10" />
                </div>
                <p className="rw-eyebrow">{item.eyebrow}</p>
                <h3 className="rw-subheading mt-4">{item.title}</h3>
                <p className="rw-body mt-4">{item.description}</p>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-marked rw-section-major">
        <div className="rw-container">
          <div className="rw-obsidian-panel rw-ink rw-grid">
            <div className="col-span-12 lg:col-span-5">
              <SectionHeading copy={copy.operating} inverse />
            </div>
            <div className="col-span-12 lg:col-span-7">
              <InstitutionalGrid columns={2} variant="ink">
                {copy.principles.map((principle) => (
                  <InstitutionalCell key={principle.title}>
                    <h3 className="rw-subheading">{principle.title}</h3>
                    <p className="rw-body mt-4">{principle.description}</p>
                  </InstitutionalCell>
                ))}
              </InstitutionalGrid>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
