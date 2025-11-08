import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lux-browser.samcux.tech/"),
  title: {
    default: "Lux Browser - Fast, Privacy-First Web Browser",
    template: "%s | Lux Browser",
  },
  description:
    "Fast, privacy‑first web browser with a clean, modern UI. No compromises, just browsing. Download Lux Browser for Windows - lightning-fast performance, tracker blocking, and private by default.",
  keywords: [
    "Lux Browser",
    "Windows browser",
    "Web browser",
    "Fast browser",
    "Privacy browser",
    "Modern browser",
    "Private browser",
    "Secure browser",
    "Browser download",
    "Windows 10 browser",
    "Windows 11 browser",
    "Chromium browser",
    "Privacy-focused browser",
    "Tracker blocking",
    "SamCux",
    "samcux browser",
    "technology",
    "open source browser",
  ],
  authors: [{ name: "SamCux", url: "https://samcux.tech" }],
  creator: "SamCux",
  publisher: "SamCux",
  alternates: {
    canonical: "https://lux-browser.samcux.tech/",
    types: {
      "application/rss+xml": "https://lux-browser.samcux.tech/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lux-browser.samcux.tech/",
    siteName: "Lux Browser",
    title: "Lux Browser - Fast, Privacy-First Web Browser",
    description:
      "Fast, privacy‑first web browser with a clean, modern UI. No compromises, just browsing. Download for Windows today.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Lux Browser - Fast, Privacy-First Web Browser",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lux Browser - Fast, Privacy-First Web Browser",
    description:
      "Fast, privacy‑first web browser with a clean, modern UI. No compromises, just browsing.",
    images: ["/og.png"],
    creator: "@samcux",
    site: "@samcux",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  classification: "Web Browser",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Lux Browser",
    "mobile-web-app-capable": "yes",
    "theme-color": "#0ea5ea",
    "color-scheme": "dark light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lux Browser",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Windows",
    description:
      "Fast, privacy‑first web browser with a clean, modern UI. No compromises, just browsing.",
    url: "https://lux-browser.samcux.tech/",
    downloadUrl: "https://lux-browser.samcux.tech/download",
    author: {
      "@type": "Person",
      name: "SamCux",
      url: "https://samcux.tech",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    featureList: [
      "Privacy-first browsing",
      "Tracker blocking",
      "Lightning-fast performance",
      "Clean modern UI",
      "Private by default",
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
