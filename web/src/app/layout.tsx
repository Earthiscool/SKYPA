import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Noto_Sans_Devanagari } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://setuai.org"),
  title: {
    default: "SetuAI.org | AI Literacy for Schools and Communities",
    template: "%s | SetuAI.org",
  },
  description:
    "SetuAI.org is a joint AI literacy initiative helping schools, education nonprofits, and sponsors bring practical AI learning to students.",
  applicationName: "SetuAI.org",
  keywords: [
    "AI literacy",
    "AI education for kids",
    "nonprofit AI education",
    "school AI workshops",
    "responsible AI",
    "AI textbook",
    "Hindi AI education",
    "AI literacy partnerships",
  ],
  authors: [{ name: "SetuAI.org" }],
  creator: "SetuAI.org",
  publisher: "SetuAI.org",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafaf9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} ${notoDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--color-ink)]">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
