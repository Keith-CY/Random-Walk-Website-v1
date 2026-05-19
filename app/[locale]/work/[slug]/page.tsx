import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentRenderer } from "@/components/content-renderer";
import { PlaceholderImage } from "@/components/placeholder-image";
import { getContentEntries, getContentEntry, getString, getStringArray } from "@/lib/content";
import { getDictionary, isLocale, locales, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { workPageCopy, workStatusLabels } from "@/lib/site-data";

export const dynamic = "force-static";
export const dynamicParams = false;

function workStatusLabel(locale: Locale, status: string) {
  return workStatusLabels[locale][status] ?? status;
}

export function generateStaticParams() {
  return locales.flatMap((locale) => getContentEntries("work", locale).map((entry) => ({ locale, slug: entry.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const entry = getContentEntry("work", rawLocale, slug);
  if (!entry) notFound();
  return localizedMetadata(rawLocale, `/work/${slug}`, getString(entry.frontmatter, "title"), getString(entry.frontmatter, "summary"));
}

export default async function WorkDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const entry = getContentEntry("work", locale, slug);
  if (!entry) notFound();
  const dictionary = getDictionary(locale);
  const copy = workPageCopy[locale];

  return (
    <main>
      <article className="rw-section">
        <div className="rw-container rw-grid">
          <div className="col-span-12 lg:col-span-7">
            <p className="rw-eyebrow">{workStatusLabel(locale, getString(entry.frontmatter, "status", "placeholder"))} · {getString(entry.frontmatter, "industry")}</p>
            <h1 className="rw-page-title mt-5">{getString(entry.frontmatter, "title")}</h1>
            <p className="rw-body-large mt-6">{getString(entry.frontmatter, "summary")}</p>
            <div className="rw-metadata-strip mt-8">
              <div>
                <p className="rw-eyebrow">{copy.detailLabels.status}</p>
                <p className="rw-body mt-3">{workStatusLabel(locale, getString(entry.frontmatter, "status", "placeholder"))}</p>
              </div>
              <div>
                <p className="rw-eyebrow">{copy.detailLabels.deployment}</p>
                <p className="rw-body mt-3">{getStringArray(entry.frontmatter, "deployment_modes").join(" / ")}</p>
              </div>
              <div>
                <p className="rw-eyebrow">{copy.detailLabels.disclosure}</p>
                <p className="rw-body mt-3">{copy.detailLabels.disclosureBody}</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <PlaceholderImage
              assetId="work-case-wall"
              label={`Placeholder: ${getString(entry.frontmatter, "title")} visual`}
              description="Anonymized project records and technical artifacts until public material is approved."
            />
          </div>
          <div className="col-span-12 mt-10 lg:col-span-8">
            <ContentRenderer body={entry.body} />
            <Link className="rw-button rw-button-secondary mt-10" href={localizePath(locale, "/work")}>{dictionary.common.backToWork}</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
