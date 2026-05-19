import Link from "next/link";
import { InstitutionalCell, InstitutionalGrid } from "@/components/institutional-grid";
import { PlaceholderImage } from "@/components/placeholder-image";
import { getContentEntries, getString, getStringArray } from "@/lib/content";
import { getDictionary, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { localizedTechnicalHeritage, workPageCopy, workStatusLabels } from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

function workStatusLabel(locale: Locale, status: string) {
  return workStatusLabels[locale][status] ?? status;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = workPageCopy[rawLocale];
  return localizedMetadata(rawLocale, "/work", copy.hero.title, copy.hero.description);
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);
  const entries = getContentEntries("work", locale);
  const copy = workPageCopy[locale];
  const heritage = localizedTechnicalHeritage[locale];

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="rw-page-title mt-5">{copy.hero.title}</h1>
            <p className="rw-body-large mt-6">{copy.hero.description}</p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage
              assetId="work-case-wall"
              label="Placeholder: work archive wall"
              description="Local model artifacts, private boundary, and anonymized technical records."
              priority
            />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.featured.eyebrow}</p>
          <InstitutionalGrid className="mt-8" columns={2}>
            <InstitutionalCell>
              <p className="rw-eyebrow">{copy.melixFeature.eyebrow}</p>
              <h2 className="rw-subheading mt-4">{copy.melixFeature.title}</h2>
              <p className="rw-body mt-4">{copy.melixFeature.description}</p>
              <Link className="rw-button rw-button-secondary mt-5" href={localizePath(locale, "/melix")}>{dictionary.cta.secondaryMelix}</Link>
            </InstitutionalCell>
            <InstitutionalCell>
              <p className="rw-eyebrow">{copy.sayitFeature.eyebrow}</p>
              <h2 className="rw-subheading mt-4">{copy.sayitFeature.title}</h2>
              <p className="rw-body mt-4">{copy.sayitFeature.description}</p>
              <Link className="rw-button rw-button-secondary mt-5" href={localizePath(locale, "/work/sayit")}>{dictionary.common.readMore}</Link>
            </InstitutionalCell>
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.examples.eyebrow}</p>
          <h2 className="rw-heading mt-4">{copy.examples.title}</h2>
          <p className="rw-body-large mt-5 max-w-4xl">{copy.examples.description}</p>
          <InstitutionalGrid className="mt-10" columns={2}>
            {entries.map((entry) => (
              <InstitutionalCell key={entry.slug}>
                <p className="rw-caption">{workStatusLabel(locale, getString(entry.frontmatter, "status", "placeholder"))} · {getString(entry.frontmatter, "industry")}</p>
                <h3 className="rw-subheading mt-3">{getString(entry.frontmatter, "title")}</h3>
                <p className="rw-body mt-4">{getString(entry.frontmatter, "summary")}</p>
                <p className="rw-caption mt-4">{copy.deliverablesLabel}: {getStringArray(entry.frontmatter, "deliverables").join(" · ")}</p>
                <Link className="rw-button rw-button-secondary mt-5" href={localizePath(locale, `/work/${entry.slug}`)}>{dictionary.common.readMore}</Link>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-marked rw-section-major">
        <div className="rw-container">
          <div className="rw-obsidian-panel rw-ink">
            <p className="rw-eyebrow">{copy.heritage.eyebrow}</p>
            <h2 className="rw-heading mt-4 text-[var(--rw-paper)]">{copy.heritage.title}</h2>
            <p className="rw-taxonomy-line mt-8">{heritage.join(" / ")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
