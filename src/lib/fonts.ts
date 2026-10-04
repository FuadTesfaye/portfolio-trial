import { Amiri, Instrument_Serif } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"

const fontSans = GeistSans
const fontMono = GeistMono

const fontDisplay = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-unique",
})

const fontArabic = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-arabic",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontDisplay.variable,
  fontArabic.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-geist-mono)]",
  "[--font-code:var(--font-geist-mono)]",
  "[--font-heading:var(--font-display-unique)]",
  "[--font-serif:var(--font-display-unique)]",
  "[--font-name:var(--font-display-unique)]",
  "[--font-display:var(--font-display-unique)]",
  "[--font-cursive:var(--font-display-unique)]",
  "[--font-handwritten:var(--font-display-unique)]",
  "[--font-detail:var(--font-geist-mono)]",
  "[--font-arabic:var(--font-arabic)]"
)
