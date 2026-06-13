"use client";

import { useEffect, useState } from "react";
import { type Locale } from "@/lib/i18n";
import { speakingContactCopy } from "@/lib/site-data";

export function ContactIntentNote({ locale }: { locale: Locale }) {
  const [intent, setIntent] = useState<string | null>(null);
  const copy = speakingContactCopy[locale];

  useEffect(() => {
    setIntent(new URLSearchParams(window.location.search).get("intent"));
  }, []);

  if (intent !== "speaking") return null;

  return (
    <div className="rw-contact-intent-note mt-7">
      <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
      <h2 className="rw-subheading mt-3">{copy.hero.title}</h2>
      <p className="rw-body mt-3">{copy.hero.description}</p>
    </div>
  );
}
