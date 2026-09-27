import { Archivo, Bodoni_Moda } from "next/font/google";

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
