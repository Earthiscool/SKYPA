import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://skypafoundation.org"),
  title: {
    default: "SKYPA Foundation | AI Literacy for Kids",
    template: "%s | SKYPA Foundation",
  },
  description:
    "SKYPA Foundation provides AI literacy education for children through school partnerships, workshops, textbook distribution, and community programs.",
  applicationName: "SKYPA Foundation",
  keywords: [
    "AI literacy",
    "AI education for kids",
    "nonprofit AI education",
    "school AI workshops",
    "responsible AI",
    "AI textbook",
  ],
  authors: [{ name: "SKYPA Foundation" }],
  creator: "SKYPA Foundation",
  publisher: "SKYPA Foundation",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--color-ink)]">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
