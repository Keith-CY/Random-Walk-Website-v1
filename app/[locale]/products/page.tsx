import Image from "next/image";
import { CloseSection } from "@/components/site/close-section";
import { JsonLd } from "@/components/site/json-ld";
import { PaintingHero } from "@/components/site/painting-hero";
import { Phrased } from "@/components/site/phrased";
import { isLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getPaintings, getSiteCopy } from "@/lib/site-copy";
import { productsData } from "@/lib/structured-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).products;
  return localizedMetadata(locale, "/products", copy.kicker, copy.lede);
}

// The projects open on their own sites, so every link out says so and carries the arrow.
function Out({ href, label, newTab, className }: { href: string; label: string; newTab: string; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener">
      {label}
      <span className="s-out" aria-hidden="true">↗</span>
      <span className="x-sr"> ({newTab})</span>
    </a>
  );
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).products;
  const paintings = getPaintings(locale);
  const lab = copy.lapla;

  return (
    <main>
      <JsonLd data={productsData(locale)} />
      <PaintingHero painting={paintings.products} kicker={copy.kicker} title={copy.title} lede={copy.lede} titleId="products-title" />

      <section className="s-section" id="lapla-si" aria-labelledby="lapla-title">
        <div className="s-wrap s-split">
          <div data-reveal>
            <p className="s-kicker">{lab.name}</p>
            <h2 className="s-h2 s-phrased" id="lapla-title"><Phrased text={lab.title} /></h2>
          </div>
          <div className="s-prose" data-reveal>
            <p style={{ marginTop: 0 }}>{lab.body}</p>
            <p className="s-caption">{lab.note}</p>
            <div className="s-actions">
              <Out className="s-link" href={lab.href} label={lab.cta} newTab={copy.newTab} />
            </div>
          </div>
        </div>
        <div className="s-wrap s-cards s-projects">
          {lab.projects.map((project) => {
            const art = paintings[project.painting];
            return (
              <a className="s-card" key={project.href} href={project.href} target="_blank" rel="noopener" data-reveal>
                <div className="s-card-art">
                  <Image src={art.src} alt={art.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                </div>
                <p className="s-caption">{project.meta}</p>
                <h3 className="s-h3">
                  {project.name}
                  <span className="s-out" aria-hidden="true">↗</span>
                  <span className="x-sr"> ({copy.newTab})</span>
                </h3>
                <p style={{ margin: 0, lineHeight: 1.6 }}>{project.body}</p>
              </a>
            );
          })}
        </div>
      </section>

      <CloseSection locale={locale} />
    </main>
  );
}
