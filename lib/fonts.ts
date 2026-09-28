import { Archivo, Bodoni_Moda } from "next/font/google";
import type { Locale } from "./i18n";

// Bodoni Moda carries the paintings' period voice; Archivo carries everything the reader acts on.
const display = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap"
});

const text = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-text",
  display: "swap"
});

export const fontVariables = `${display.variable} ${text.variable}`;

// A Song, Mincho or Myeongjo face sits behind Bodoni for Chinese, Japanese and Korean headings.
// scripts/fetch-cjk-fonts.mjs self-hosts each one before the build; a page links only its own language's.
export const cjkSerif: Partial<Record<Locale, string>> = {
  zh: "/fonts/noto-serif-sc.css",
  ja: "/fonts/noto-serif-jp.css",
  ko: "/fonts/noto-serif-kr.css"
};
