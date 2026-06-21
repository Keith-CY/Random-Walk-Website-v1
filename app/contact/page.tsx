import { LocaleRedirect } from "@/components/locale-redirect";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact",
  robots: { index: false, follow: true }
};

export default function ContactAliasPage() {
  return <LocaleRedirect label="Contact Random Walk." path="/contact" />;
}
