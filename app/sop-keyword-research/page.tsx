import type { Metadata } from "next";
import Link from "next/link";
import styles from "./research.module.css";

const description = "SOP Keyword Research is Random Walk’s internal tool for researching keywords, comparing demand signals, and preparing content briefs.";
export const metadata: Metadata = {
  title: "SOP Keyword Research",
  description,
  alternates: { canonical: "/sop-keyword-research/" },
  openGraph: { title: "SOP Keyword Research", description, url: "/sop-keyword-research/" }
};

export default function ResearchHome() {
  return (
    <main id="main-content">
      <section className={styles.hero} aria-labelledby="app-title">
        <div className={`s-wrap ${styles.heroGrid}`}>
          <div>
            <p className="s-kicker">A research tool by Random Walk</p>
            <h1 className={`s-h1 ${styles.title}`} id="app-title">SOP Keyword Research</h1>
            <p className="s-lede">Find useful keywords. Compare demand signals. Turn the evidence into a content brief.</p>
            <div className="s-actions">
              <Link className="s-btn" href="/sop-keyword-research/privacy/">Read the privacy policy</Link>
              <a className="s-link" href="#how-it-works">How it works</a>
            </div>
          </div>
          <aside className={styles.summary} aria-labelledby="access-title">
            <p className="s-kicker">Purpose & access</p>
            <h2 className="s-h3" id="access-title">Research before production.</h2>
            <p>An internal application for Random Walk operators and approved collaborators. It supports keyword selection and traffic analysis in our content workflows. There is no public account registration.</p>
            <p>Google keyword API access is being prepared. Availability depends on Google’s approval and an authorized Google Ads account.</p>
          </aside>
        </div>
      </section>
      <section className="s-section" id="how-it-works" aria-labelledby="workflow-title">
        <div className="s-wrap">
          <p className="s-kicker">From a question to a brief</p>
          <h2 className="s-h2" id="workflow-title">Keep the evidence with the idea.</h2>
          <ol className={styles.steps}>
            <li className="s-prose"><span className={styles.number}>01 / DEFINE</span><h3 className="s-h3">Set the scope</h3><p>Choose seed keywords, a country, and a language for the topic under consideration.</p></li>
            <li className="s-prose"><span className={styles.number}>02 / RESEARCH</span><h3 className="s-h3">Compare signals</h3><p>Use authorized Google keyword planning data alongside available platform research. Record the source, market, period, and collection time.</p></li>
            <li className="s-prose"><span className={styles.number}>03 / REVIEW</span><h3 className="s-h3">Prepare a brief</h3><p>Review related keywords and topic options. An AI-assisted step can use selected research results to help prepare a content brief for human review.</p></li>
          </ol>
        </div>
      </section>
      <section className={`s-section ${styles.band}`} aria-labelledby="data-title">
        <div className={`s-wrap ${styles.bandInner}`}>
          <div><p className="s-kicker">Google data, with context</p><h2 className="s-h2" id="data-title">Understand what a signal measures.</h2></div>
          <div className="s-prose">
            <p>With the required access, the app requests keyword ideas, estimated average monthly searches, and advertiser competition from Google Ads keyword planning services.</p>
            <p>These are research indicators. Estimated searches are not guaranteed traffic, and advertiser competition does not measure organic search difficulty. A trend or related term from another platform is not a Google search-volume estimate.</p>
            <p>The app uses Google Ads for keyword research. It does not create or change campaigns, buy ads, or publish content.</p>
          </div>
        </div>
      </section>
      <section className="s-section" aria-labelledby="privacy-title">
        <div className="s-wrap s-split">
          <div><p className="s-kicker">Data & control</p><h2 className="s-h2" id="privacy-title">A clear boundary around account access.</h2></div>
          <div className="s-prose">
            <p>Google access credentials stay with the local collector. Selected keyword phrases and aggregate metrics may be sent to the configured AI service when an operator runs an AI-assisted research step. Credentials and Google Ads customer IDs are excluded from those requests.</p>
            <p>The application privacy policy explains data access, use, storage, sharing, and deletion, including how to revoke Google authorization.</p>
            <div className="s-actions"><Link className="s-link" href="/sop-keyword-research/privacy/">Application privacy policy</Link><a className="s-link" href="mailto:biz@random-walk.co.jp">Contact Random Walk</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
