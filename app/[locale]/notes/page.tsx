import Link from "next/link";
import { InstitutionalCell, InstitutionalGrid } from "@/components/institutional-grid";
import { getContentEntries, getString } from "@/lib/content";
import { getDictionary, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { notesPageCopy } from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = notesPageCopy[rawLocale];
  return localizedMetadata(rawLocale, "/notes", copy.hero.title, copy.hero.description);
}

export default async function NotesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);
  const entries = getContentEntries("notes", locale);
  const copy = notesPageCopy[locale];

  return (
    <main className="rw-section">
      <div className="rw-container">
        <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
        <h1 className="rw-page-title mt-5">{copy.hero.title}</h1>
        <p className="rw-body-large mt-6 max-w-3xl">{copy.hero.description}</p>
        <InstitutionalGrid className="mt-10" columns={2}>
          {entries.map((entry) => (
            <InstitutionalCell key={entry.slug}>
              <p className="rw-caption">{getString(entry.frontmatter, "date")} · {getString(entry.frontmatter, "author")}</p>
              <h2 className="rw-subheading mt-3">{getString(entry.frontmatter, "title")}</h2>
              <p className="rw-body mt-4">{getString(entry.frontmatter, "summary")}</p>
              <Link className="rw-button rw-button-secondary mt-5" href={localizePath(locale, `/notes/${entry.slug}`)}>{dictionary.common.readMore}</Link>
            </InstitutionalCell>
          ))}
        </InstitutionalGrid>
        <div className="rw-note-topics rw-provenance-panel mt-10">
          <p className="rw-eyebrow">{copy.topicsEyebrow}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {copy.topics.map((topic) => (
              <p className="rw-body" key={topic}>{topic}</p>
            ))}
          </div>
          <p className="rw-caption mt-5">{copy.moreNotes}</p>
        </div>
      </div>
    </main>
  );
}
