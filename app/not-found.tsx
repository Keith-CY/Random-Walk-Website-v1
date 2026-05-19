import Link from "next/link";

export default function NotFound() {
  return (
    <main className="rw-container rw-section">
      <p className="rw-eyebrow">Not found</p>
      <h1 className="rw-page-title" style={{ marginTop: 16 }}>This page is not available.</h1>
      <p className="rw-body-large" style={{ maxWidth: 720 }}>
        The Random Walk site has moved to a new Local AI Infrastructure structure.
      </p>
      <Link className="rw-button rw-button-primary" href="/en/">
        Go to homepage
      </Link>
    </main>
  );
}
