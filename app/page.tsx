import { HomePageContent } from "@/components/home-page-content";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { homeCopy } from "@/lib/site-data";

export const dynamic = "force-static";

const copy = homeCopy[defaultLocale];

// The root layout's title template does not apply to its own segment, so add the suffix here.
export const metadata = { ...localizedMetadata(defaultLocale, "/", copy.hero.title, copy.hero.description), title: { absolute: `${copy.hero.title} - Random Walk` } };

export default function RootPage() {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      <HomePageContent locale={defaultLocale} />
    </LocalizedPageShell>
  );
}
