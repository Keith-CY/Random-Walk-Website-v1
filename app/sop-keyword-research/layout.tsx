import Link from "next/link";
import { fontVariables } from "@/lib/fonts";
import styles from "./research.module.css";

export default function ResearchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <a href="#main-content" className={styles.skip}>Skip to content</a>
        <header className="s-header">
          <nav className={`s-nav ${styles.nav}`} aria-label="Application navigation">
            <Link href="/en/" className="s-nav-logo" aria-label="Random Walk company website">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo-wordmark.svg" alt="Random Walk" width={170} height={30} />
            </Link>
            <div className={styles.links}>
              <Link href="/sop-keyword-research/">The app</Link>
              <Link href="/sop-keyword-research/privacy/">Privacy</Link>
              <a href="mailto:biz@random-walk.co.jp">Contact</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <div className={`s-wrap ${styles.footerInner}`}>
            <p>SOP Keyword Research · Random Walk K.K.</p>
            <nav aria-label="Application footer" className={styles.links}>
              <Link href="/sop-keyword-research/privacy/">App privacy</Link>
              <Link href="/en/company/">About the operator</Link>
              <a href="mailto:privacy@random-walk.co.jp">Privacy contact</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
