import { MeetScheduler } from "@/components/meet-scheduler";
import { isLocale, type Locale } from "@/lib/i18n";
import { meetPageCopy } from "@/lib/meet";
import { localizedMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = meetPageCopy[rawLocale];
  return localizedMetadata(rawLocale, "/meet", copy.metadataTitle, copy.metadataDescription);
}

export default async function MeetPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const copy = meetPageCopy[locale];
  const officeAddress = process.env.NEXT_PUBLIC_MEET_OFFICE_ADDRESS || copy.address.fallback;
  const mapsUrl = process.env.NEXT_PUBLIC_MEET_MAP_URL || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;
  const apiBase = process.env.NEXT_PUBLIC_MEET_API_BASE ?? "/api/meet";
  const allowMock = process.env.NEXT_PUBLIC_MEET_ALLOW_MOCK === "true" || process.env.NODE_ENV !== "production";

  return (
    <main className="rw-meet-page">
      <section className="rw-section rw-section-major">
        <div className="rw-container">
          <div className="rw-meet-hero rw-motion-reveal">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="rw-page-title mt-5">{copy.hero.title}</h1>
            <p className="rw-body-large mt-5">{copy.hero.description}</p>
          </div>
          <div className="mt-10 rw-motion-reveal" style={{ "--rw-motion-index": 1 } as CSSProperties}>
            <MeetScheduler
              locale={locale}
              pageOrigin={`/${locale}/meet`}
              apiBase={apiBase}
              allowMock={allowMock}
              officeAddress={officeAddress}
              mapsUrl={mapsUrl}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
