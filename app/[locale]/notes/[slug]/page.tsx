import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentRenderer } from "@/components/content-renderer";
import { PlaceholderImage } from "@/components/placeholder-image";
import { getContentEntries, getContentEntry, getString, getStringArray } from "@/lib/content";
import { getDictionary, isLocale, locales, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { notesPageCopy } from "@/lib/site-data";
import type { VisualAssetId } from "@/lib/visual-assets";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => getContentEntries("notes", locale).map((entry) => ({ locale, slug: entry.slug })));
}

const noteVisuals: Partial<Record<string, { hero: VisualAssetId; supporting: VisualAssetId }>> = {
  "private-deployment-boundaries": {
    hero: "security-boundary-model",
    supporting: "services-deployment-topology"
  },
  "evaluate-local-lora": {
    hero: "services-lora-adapter",
    supporting: "services-evaluation-report"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const entry = getContentEntry("notes", rawLocale, slug);
  if (!entry) notFound();
  return localizedMetadata(rawLocale, `/notes/${slug}`, getString(entry.frontmatter, "title"), getString(entry.frontmatter, "summary"));
}

export default async function NoteDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const entry = getContentEntry("notes", locale, slug);
  if (!entry) notFound();
  const dictionary = getDictionary(locale);
  const copy = notesPageCopy[locale];
  const visuals = noteVisuals[slug] ?? { hero: copy.visuals.hero, supporting: copy.visuals.publication };
  const tags = getStringArray(entry.frontmatter, "tags");

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <article className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{getString(entry.frontmatter, "date")} · {getString(entry.frontmatter, "author")}</p>
            <h1 className="rw-page-title mt-5">{getString(entry.frontmatter, "title")}</h1>
            <p className="rw-body-large mt-6">{getString(entry.frontmatter, "summary")}</p>
            <div className="rw-metadata-strip mt-8">
              <div>
                <p className="rw-eyebrow">{copy.detailLabels.type}</p>
                <p className="rw-body mt-3">{copy.detailLabels.technicalNote}</p>
              </div>
              <div>
                <p className="rw-eyebrow">{copy.detailLabels.topic}</p>
                <p className="rw-body mt-3">{tags.join(" / ")}</p>
              </div>
              <div>
                <p className="rw-eyebrow">{copy.detailLabels.boundary}</p>
                <p className="rw-body mt-3">{copy.detailLabels.customerBoundary}</p>
              </div>
            </div>
          </article>
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage assetId={visuals.hero} priority />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container rw-grid items-start">
          <article className="col-span-12 lg:col-span-8">
            <div className="rw-legal-panel rw-legal-content">
              <ContentRenderer body={entry.body} />
            </div>
          </article>
          <aside className="col-span-12 lg:col-span-4">
            <PlaceholderImage assetId={visuals.supporting} ratio="4 / 5" />
            <div className="rw-provenance-panel mt-8">
              <p className="rw-eyebrow">{copy.topicsEyebrow}</p>
              <div className="mt-5 grid gap-3">
                {tags.map((tag) => (
                  <p className="rw-body" key={tag}>{tag}</p>
                ))}
              </div>
              <p className="rw-caption mt-5">{copy.moreNotes}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="rw-section rw-section-tight rw-section-marked">
        <div className="rw-container">
          <Link className="rw-button rw-button-secondary" href={localizePath(locale, "/notes")}>{dictionary.common.backToNotes}</Link>
        </div>
      </section>
    </main>
  );
}
