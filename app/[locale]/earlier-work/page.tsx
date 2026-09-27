import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/site/page-intro";
import { earlierWork } from "@/lib/detail-copy";
import { isLocale, localizePath } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";
import { earlierWorkSlugs } from "@/lib/work-entries";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return localizedMetadata(locale, "/earlier-work", "Earlier work", getSiteCopy(locale).earlierWork.lede);
}

export default async function EarlierWorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).earlierWork;

  return (
    <main>
      <PageIntro kicker={copy.kicker} title={copy.title} lede={copy.lede} titleId="earlier-title" />
      <section className="s-section" aria-label={copy.kicker}>
        <div className="s-wrap">
          <div className="s-cards">
            {earlierWorkSlugs.map((slug) => {
              const page = earlierWork[slug];
              return (
                <Link className="s-card" key={slug} href={localizePath(locale, `/earlier-work/${slug}`)}>
                  {page.exhibit ? (
                    <div className="s-card-art s-card-shot">
                      <Image src={page.exhibit.src} alt={page.exhibit.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                    </div>
                  ) : null}
                  {page.statusTag ? <p className="s-caption">{page.statusTag}</p> : null}
                  <h2 className="s-h3">{page.title}</h2>
                  <p style={{ margin: 0, lineHeight: 1.6 }}>{page.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
