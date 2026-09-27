import type { Metadata } from "next";
import { ogImage } from "@/lib/metadata";
import "./globals.css";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://random-walk.co.jp"),
  title: {
    default: "Random Walk",
    template: "%s - Random Walk"
  },
  openGraph: {
    siteName: "Random Walk",
    images: [ogImage]
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage.url]
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  }
};

// Each tree renders its own <html lang>: app/[locale]/layout.tsx for localized routes,
// LocalizedPageShell / LocaleRedirect for English compatibility routes, and not-found.tsx.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
