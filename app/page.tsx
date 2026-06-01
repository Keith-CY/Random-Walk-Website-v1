import { HomePageContent } from "@/components/home-page-content";
import { MotionController } from "@/components/motion-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { homeCopy } from "@/lib/site-data";

export const dynamic = "force-static";

const copy = homeCopy[defaultLocale];

export const metadata = localizedMetadata(defaultLocale, "/", copy.hero.title, copy.hero.description);

export default function RootPage() {
  return (
    <div lang={defaultLocale} className="flex min-h-dvh flex-col">
      <MotionController />
      <SiteHeader locale={defaultLocale} />
      <div className="flex-1">
        <HomePageContent locale={defaultLocale} />
      </div>
      <SiteFooter locale={defaultLocale} />
    </div>
  );
}
