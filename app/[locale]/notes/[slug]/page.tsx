import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentRenderer } from "@/components/content-renderer";
import { getContentEntries, getContentEntry, getString, getStringArray } from "@/lib/content";
import { getDictionary, isLocale, locales, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { notesPageCopy } from "@/lib/site-data";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => getContentEntries("notes", locale).map((entry) => ({ locale, slug: entry.slug })));
}

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

  return (
    <main className="rw-section">
      <article className="rw-container max-w-4xl">
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
            <p className="rw-body mt-3">{getStringArray(entry.frontmatter, "tags").join(" / ")}</p>
          </div>
          <div>
            <p className="rw-eyebrow">{copy.detailLabels.boundary}</p>
            <p className="rw-body mt-3">{copy.detailLabels.customerBoundary}</p>
          </div>
        </div>
        <div className="rw-legal-panel rw-legal-content mt-10">
          <ContentRenderer body={entry.body} />
        </div>
        <Link className="rw-button rw-button-secondary mt-10" href={localizePath(locale, "/notes")}>{dictionary.common.backToNotes}</Link>
      </article>
    </main>
  );
}
