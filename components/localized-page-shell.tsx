import type { ReactNode } from "react";
import { MotionController } from "@/components/motion-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/i18n";
import { fontVariables } from "@/lib/fonts";

export function LocalizedPageShell({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <div className="flex min-h-dvh flex-col">
          <MotionController />
          <SiteHeader locale={locale} />
          <div className="flex-1">{children}</div>
          <SiteFooter locale={locale} />
        </div>
      </body>
    </html>
  );
}
