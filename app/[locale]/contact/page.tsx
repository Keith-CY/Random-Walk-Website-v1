import { ContactForm } from "@/components/contact-form";
import { PaintingHero } from "@/components/site/painting-hero";
import { isLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { company, getSiteCopy, paintings } from "@/lib/site-copy";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).contact;
  return localizedMetadata(locale, "/contact", copy.kicker, copy.lede);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).contact;

  return (
    <main>
      <PaintingHero painting={paintings.contact} kicker={copy.kicker} title={copy.title} lede={copy.lede} titleId="contact-title" />
      <section className="s-section" aria-label="Project form">
        <div className="s-wrap s-split">
          <div>
            <h2 className="s-h2">{copy.formTitle}</h2>
            <p className="s-lede" style={{ fontSize: 17 }}>{copy.writeTo} <span className="s-mail" style={{ opacity: 1 }}>{company.email}</span>.</p>
          </div>
          <ContactForm locale={locale} pageOrigin={`/${locale}/contact`} emailAddress={company.email} />
        </div>
      </section>
      <section className="s-section" aria-labelledby="map-title">
        <div className="s-wrap s-split">
          <div>
            <h2 className="s-h2" id="map-title">{copy.mapTitle}</h2>
            <p className="s-lede" style={{ fontSize: 17 }}>{copy.mapBody}</p>
          </div>
          {/* The public site shows the neighbourhood only; the exact address is on the legal pages and the visit page. */}
          <figure className="s-map" style={{ marginTop: 0 }}>
            <iframe title={copy.mapTitle} src={`https://www.google.com/maps?q=${encodeURIComponent(company.addressBlock)}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <figcaption className="s-caption">
              {company.addressBlockLatin} · <a className="s-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.addressBlock)}`} target="_blank" rel="noopener noreferrer">{copy.mapLink}</a>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
