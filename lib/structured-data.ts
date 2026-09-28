import { siteUrl } from "./metadata";
import { company } from "./site-copy";

const organizationId = `${siteUrl}/#organization`;

// The public site gives the address to the neighbourhood only; the street address lives on the legal pages.
export function organizationData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "Random Walk",
        legalName: company.name,
        alternateName: company.nameLatin,
        url: `${siteUrl}/`,
        logo: `${siteUrl}/apple-touch-icon.png`,
        email: company.email,
        foundingDate: "2022-09-14",
        description: "An AI lab for growing companies: model selection, datasets, training, deployment on your own machines and upkeep.",
        address: { "@type": "PostalAddress", addressLocality: "Higashiyamato", addressRegion: "Tokyo", addressCountry: "JP" },
        knowsAbout: ["Custom language models", "Datasets", "Fine-tuning", "Model evaluation", "On-premises AI deployment", "Apple Silicon inference"]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Random Walk",
        url: `${siteUrl}/`,
        inLanguage: ["en", "zh", "ja", "ko"],
        publisher: { "@id": organizationId }
      }
    ]
  };
}

export function articleData(note: { url: string; title: string; description: string; published: string; modified: string; image: string; locale: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: note.title,
    description: note.description,
    datePublished: note.published,
    dateModified: note.modified,
    inLanguage: note.locale,
    image: `${siteUrl}${note.image}`,
    mainEntityOfPage: `${siteUrl}${note.url}`,
    author: { "@id": organizationId, "@type": "Organization", name: "Random Walk" },
    publisher: { "@id": organizationId, "@type": "Organization", name: "Random Walk", logo: { "@type": "ImageObject", url: `${siteUrl}/apple-touch-icon.png` } }
  };
}
