import { defaultLocale, locales, localizePath } from "@/lib/i18n";

function redirectScript(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `
(() => {
  const supported = ${JSON.stringify(locales)};
  const fallback = ${JSON.stringify(defaultLocale)};
  const targetPath = ${JSON.stringify(normalizedPath.replace(/\/$/, ""))};
  const languageList = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ""];
  const selected = languageList
    .map((item) => String(item).toLowerCase().split("-")[0])
    .find((code) => supported.includes(code)) || fallback;
  const destinationPath = "/" + selected + targetPath + "/";
  const destination = destinationPath + window.location.search + window.location.hash;

  if (window.location.pathname + window.location.search + window.location.hash !== destination) {
    window.location.replace(destination);
  }
})();
`;
}

export function LocaleRedirect({ label, path }: { label: string; path: string }) {
  const fallbackPath = `${localizePath(defaultLocale, path)}/`;

  return (
    <main className="rw-section rw-section-major">
      <script dangerouslySetInnerHTML={{ __html: redirectScript(path) }} />
      <div className="rw-container">
        <p className="rw-eyebrow">Redirecting</p>
        <h1 className="rw-page-title mt-5">{label}</h1>
        <p className="rw-body-large mt-5">Opening the best language version for your browser.</p>
        <p className="mt-8">
          <a className="rw-button rw-button-primary" href={fallbackPath}>
            Continue in English
          </a>
        </p>
        <noscript>
          <p className="rw-body mt-5">
            JavaScript is disabled. Continue to <a className="rw-text-link" href={fallbackPath}>the English page</a>.
          </p>
        </noscript>
      </div>
    </main>
  );
}
