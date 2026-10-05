import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site/page-intro";
import { OperatorDetails } from "@/components/site/operator-details";
import styles from "../research.module.css";

const description = "How SOP Keyword Research accesses, uses, stores, shares, and deletes Google data and keyword research information.";
export const metadata: Metadata = {
  title: "SOP Keyword Research — Privacy Policy",
  description,
  alternates: { canonical: "/sop-keyword-research/privacy/" },
  openGraph: { title: "SOP Keyword Research — Privacy Policy", description, url: "/sop-keyword-research/privacy/" }
};

const contents = [
  ["scope", "Scope and operator"],
  ["data", "Data we access"],
  ["use", "How we use data"],
  ["processing", "Storage and service providers"],
  ["sharing", "Sharing and Limited Use"],
  ["security", "Security"],
  ["retention", "Retention, revocation, and deletion"],
  ["contact", "Questions and changes"]
];

export default function ResearchPrivacy() {
  return (
    <main id="main-content" className={styles.policy}>
      <PageIntro kicker="SOP Keyword Research" title="Privacy policy" lede="How the application handles account access and keyword research data." titleId="privacy-title">
        <p className="s-caption" style={{ marginTop: 22 }}>Effective and last updated: 6 October 2026</p>
      </PageIntro>
      <section className="s-section" aria-label="Application privacy policy">
        <div className="s-wrap s-split">
          <nav className="s-toc" aria-label="Policy contents"><p className="s-kicker">In this policy</p><ol>{contents.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ol></nav>
          <div className="s-doc">
            <section id="scope">
              <h2>Scope and operator</h2>
              <p>Random Walk株式会社 (Random Walk K.K.), Japan, operates <Link className="s-link" href="/sop-keyword-research/">SOP Keyword Research</Link>. This policy covers the application used by our operators and approved collaborators to research keywords and prepare content briefs. Google features are available only after the required API access and account authorization are in place.</p>
              <p>The public application pages do not ask visitors to connect a Google account. General website inquiries are covered by our <Link className="s-link" href="/en/privacy/">website privacy policy</Link>.</p>
            </section>
            <section id="data">
              <h2>Data we access</h2>
              <ul>
                <li>Research inputs: seed keywords, target country, language, and the scope of a research task.</li>
                <li>Google keyword planning results: suggested keyword phrases, estimated average monthly searches, and advertiser competition values, when available.</li>
                <li>Connection information: OAuth access and refresh credentials and Google Ads customer identifiers needed by the local collector to make authorized requests. A manager account identifier may be used when required.</li>
                <li>Research records: source references, market and time period, collection time, and request-status information used to check the evidence.</li>
              </ul>
              <p>The app does not request Gmail, Google Drive, contacts, payment details, customer lists, or campaign performance reports. Google Ads authorization can cover broader account capabilities; this application uses it only for its keyword research requests.</p>
            </section>
            <section id="use">
              <h2>How we use data</h2>
              <p>We use the information to retrieve keyword ideas, compare demand indicators, preserve their context, and prepare topic suggestions and content briefs. We also use request-status information to diagnose access and collection failures.</p>
              <p>The app does not create, edit, or fund advertising campaigns. It does not use the connection to publish content. Research results require human review and are not a promise of traffic or commercial outcomes.</p>
            </section>
            <section id="processing">
              <h2>Storage and service providers</h2>
              <p>The trusted collector runs on the operator’s computer. Credentials are supplied through its local environment. Research snapshots and reports are saved in local workflow and run folders. Credentials are excluded from research reports, application logs, and AI inputs.</p>
              <p>Google processes the keyword planning requests needed to provide the requested results. When an operator runs an AI-assisted research step, selected keyword phrases, aggregate metrics, and relevant research context are sent to the configured AI provider. The current workflow uses Anthropic’s Claude service through a locally configured client. OAuth credentials and Google Ads customer identifiers are excluded from those AI requests.</p>
              <p>AI processing is part of the requested research and drafting feature. It can involve processing outside Japan under the provider’s applicable service terms and account data controls. Operators should not include confidential personal information in seed keywords or research inputs.</p>
              <p>The separate task-management site receives task instructions, scope, scheduling information, and status codes. The app does not upload local research snapshots, full reports, or Google credentials to that site.</p>
            </section>
            <section id="sharing">
              <h2>Sharing and Limited Use</h2>
              <p>SOP Keyword Research’s use and transfer of information received from Google APIs will adhere to the <a className="s-link" href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including its Limited Use requirements.</p>
              <p>Google-sourced information is used for this application’s research features. We do not sell it, supply it to data brokers, use it to target advertisements, or use it to train generalized AI models. AI requests described above are for research and drafting. Before Google-sourced information is sent to an AI provider, the connection must be configured to exclude model training and optional feedback or data-sharing programs.</p>
              <p>We share information only as needed to provide the requested features through the service providers described above, with the user’s consent, for security, or where applicable law requires it. Access within Random Walk is limited to authorized operators who need it for those purposes.</p>
            </section>
            <section id="security">
              <h2>Security</h2>
              <p>The collector uses HTTPS and fixed official API endpoints. It does not copy browser cookies. The application separates account credentials from research outputs and limits the information passed to the AI service.</p>
              <p>Local access controls and the security of the operator’s computer remain necessary. No storage or transmission method can guarantee absolute security.</p>
            </section>
            <section id="retention">
              <h2>Retention, revocation, and deletion</h2>
              <p>Local research snapshots and reports remain until an authorized operator deletes the relevant local files. The application does not currently apply an automatic deletion schedule. Provider-side processing and retention are governed by the applicable provider terms; deleting a local file does not itself delete a provider’s records.</p>
              <p>You can revoke the application’s Google connection from your <a className="s-link" href="https://myaccount.google.com/connections">Google Account connections</a>. Revocation prevents future authorized access. It does not automatically erase research data already stored locally.</p>
              <p>To remove the local connection, stop the collector and remove its Google credentials from the local configuration. Delete the relevant local research snapshots, reports, and any copies you control if you no longer need them. Contact <a className="s-link" href="mailto:privacy@random-walk.co.jp">privacy@random-walk.co.jp</a> for help with access, correction, or deletion of information controlled by Random Walk, subject to applicable legal obligations.</p>
            </section>
            <section id="contact">
              <h2>Questions and changes</h2>
              <p>For privacy questions, contact <a className="s-link" href="mailto:privacy@random-walk.co.jp">privacy@random-walk.co.jp</a>. For application support, contact <a className="s-link" href="mailto:biz@random-walk.co.jp">biz@random-walk.co.jp</a>.</p>
              <p>We will update this page when the application’s data practices change. Material changes that require new consent or permissions will be presented before the affected access begins.</p>
            </section>
            <OperatorDetails locale="en" />
          </div>
        </div>
      </section>
    </main>
  );
}
