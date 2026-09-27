import { HomeContent } from "@/components/home/home-content";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";

export const dynamic = "force-static";

const copy = getSiteCopy(defaultLocale).home;

// The root layout's title template does not apply to its own segment, so add the suffix here.
export const metadata = { ...localizedMetadata(defaultLocale, "/", copy.title, copy.description), title: { absolute: `${copy.title} - Random Walk` } };

export default function RootPage() {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      <HomeContent locale={defaultLocale} />
    </LocalizedPageShell>
  );
}
