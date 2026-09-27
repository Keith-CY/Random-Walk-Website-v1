import Image from "next/image";
import Link from "next/link";
import { CloseSection } from "@/components/site/close-section";
import { isLocale, localizePath } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";
import { workEntries } from "@/lib/work-entries";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return localizedMetadata(locale, "/work", "Work", getSiteCopy(locale).work.lede);
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).work;

  return (
    <main>
      <section className="s-section" aria-labelledby="work-title">
        <div className="s-wrap">
          <p className="s-kicker">{copy.kicker}</p>
          <h1 className="s-h1" id="work-title">{copy.title}</h1>
          <p className="s-lede">{copy.lede}</p>
          <div className="s-cards" style={{ marginTop: 64 }}>
            {workEntries.map((entry) => (
              <Link className="s-card" key={entry.slug} href={localizePath(locale, `/work/${entry.slug}`)}>
                {entry.painting ? (
                  <div className="s-card-art">
                    <Image src={entry.painting.src} alt={entry.painting.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  </div>
                ) : (
                  <div className="s-card-blank">{entry.title}</div>
                )}
                <p className="s-caption">{entry.kicker}{entry.status ? ` · ${entry.status}` : ""}</p>
                <h2 className="s-h3">{entry.title}</h2>
                <p style={{ margin: 0, lineHeight: 1.6 }}>{entry.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CloseSection locale={locale} />
    </main>
  );
}
