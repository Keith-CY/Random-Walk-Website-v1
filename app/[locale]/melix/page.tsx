import { CloseSection } from "@/components/site/close-section";
import { Exhibit } from "@/components/site/exhibit";
import { PaintingHero } from "@/components/site/painting-hero";
import { isLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getPaintings, getSiteCopy } from "@/lib/site-copy";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

const repository = "https://github.com/Keith-CY/melix";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).melix;
  return localizedMetadata(locale, "/melix", copy.kicker, copy.lede);
}

export default async function MelixPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).melix;

  return (
    <main>
      <PaintingHero painting={getPaintings(locale).melix} kicker={copy.kicker} title={copy.title} lede={copy.lede} titleId="melix-title">
        <div className="s-actions">
          <a className="s-btn" href={repository} rel="noopener noreferrer" target="_blank">{copy.repo}</a>
        </div>
      </PaintingHero>

      <section className="s-section s-section-tight" aria-label={copy.window.alt}>
        <div className="s-wrap"><Exhibit image={copy.window} /></div>
      </section>

      <section className="s-section" aria-label={copy.capabilitiesLabel}>
        <div className="s-wrap s-split">
          <div>
            <h2 className="s-h2">{copy.loopTitle}</h2>
            <div style={{ marginTop: 32 }}><Exhibit image={copy.cover} sizes="(max-width: 960px) 100vw, 480px" /></div>
          </div>
          <div className="s-rows">
            {copy.capabilities.map((c) => (
              <div key={c.title}>
                <h3 className="s-h3">{c.title}</h3>
                <p style={{ margin: "8px 0 0", lineHeight: 1.65, maxWidth: "60ch" }}>{c.body}</p>
              </div>
            ))}
            <p className="s-caption">{copy.source}</p>
          </div>
        </div>
      </section>

      <CloseSection locale={locale} />
    </main>
  );
}
