import Image from "next/image";
import Link from "next/link";
import { fontVariables } from "@/lib/fonts";
import { defaultLocale } from "@/lib/i18n";
import { getSiteCopy, paintings } from "@/lib/site-copy";

export default function NotFound() {
  const copy = getSiteCopy(defaultLocale).notFound;
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <main className="s-hero" style={{ minHeight: "100dvh" }}>
          <div className="s-hero-art" style={{ height: "100dvh" }}>
            <Image src={paintings.notFound.src} alt={paintings.notFound.alt} fill priority sizes="100vw" />
            <div className="s-hero-veil" />
          </div>
          <div className="s-hero-copy">
            <p className="s-kicker">404</p>
            <h1 className="s-h1">{copy.title}</h1>
            <p className="s-lede">{copy.body}</p>
            <div className="s-actions">
              <Link className="s-btn" href="/en/">{copy.cta}</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
