import type { Metadata, Viewport } from "next";
import { Mulish, Petrona } from "next/font/google";
import "./globals.css";
import { SITE, siteUrl } from "@/config/site";
import { CookieBanner } from "@/components/analytics/cookie-banner";
import { Analytics } from "@/components/analytics/analytics";

const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish", display: "swap" });
const petrona = Petrona({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-petrona",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${SITE.brand} | Egg & Sperm Donation`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    "Become an egg or sperm donor and get matched with a family. Compensation for your time, medical costs covered, a dedicated coordinator — U.S. and international donors welcome.",
  openGraph: {
    type: "website",
    siteName: SITE.brand,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#FDF9E8",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mulish.variable} ${petrona.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
