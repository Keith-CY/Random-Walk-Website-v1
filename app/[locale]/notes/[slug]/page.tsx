import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentRenderer } from "@/components/content-renderer";
import { CloseSection } from "@/components/site/close-section";
import { PaintingHero } from "@/components/site/painting-hero";
import { getContentEntries, getContentEntry, getString, getStringArray } from "@/lib/content";
import { isLocale, locales, localizePath } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy, notePaintings, paintings } from "@/lib/site-copy";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => getContentEntries("notes", locale).map((entry) => ({ locale, slug: entry.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const entry = getContentEntry("notes", locale, slug);
  if (!entry) notFound();
  return localizedMetadata(locale, `/notes/${slug}`, getString(entry.frontmatter, "title"), getString(entry.frontmatter, "summary"));
}

export default async function NotePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const entry = getContentEntry("notes", locale, slug);
  if (!entry) notFound();
  const copy = getSiteCopy(locale).notes;
  const date = getString(entry.frontmatter, "date");

  return (
    <main>
      <PaintingHero painting={notePaintings[slug] ?? paintings.company} kicker={copy.kicker} title={getString(entry.frontmatter, "title")} lede={getString(entry.frontmatter, "summary")} titleId="note-title" />
      <section className="s-section" aria-label={getString(entry.frontmatter, "title")}>
        <div className="s-wrap s-split">
          <aside className="s-note-meta">
            <dl className="s-dl" style={{ marginTop: 0 }}>
              <dt>Date</dt><dd><time className="s-num" dateTime={date}>{date}</time></dd>
              <dt>{copy.by}</dt><dd>{getString(entry.frontmatter, "author")}</dd>
              <dt>{copy.topics}</dt><dd>{getStringArray(entry.frontmatter, "tags").join(", ")}</dd>
            </dl>
            <p style={{ marginTop: 28 }}><Link className="s-link" href={localizePath(locale, "/notes")}>{copy.back}</Link></p>
          </aside>
          <article className="s-doc">
            <ContentRenderer body={entry.body} />
          </article>
        </div>
      </section>
      <CloseSection locale={locale} />
    </main>
  );
}
