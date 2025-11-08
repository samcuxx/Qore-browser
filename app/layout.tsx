import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lux-browser.samcux.tech/"),
  title: {
    default: "Lux Browser",
    template: "%s | Lux Browser"
  },
  description:
    "Fast, privacy‑first web browser with a clean, modern UI. No compromises, just browsing.",
  keywords: [
    "Lux Browser",
    "Windows browser",
    "Web browser",
    "Fast browser",
    "Privacy browser",
    "Modern browser",
    "SamCux",
    "samcux browser",
    "technology"
  ],
  authors: [{ name: "SamCux" }],
  alternates: {
    canonical: "https://lux-browser.samcux.tech/"
  },
  openGraph: {
    images: [
      {
        url: "/icon.svg",
        width: 800,
        height: 600
      }
    ]
  },
  twitter: {
    title: "Lux Browser",
    card: "summary_large_image"
  },
  robots: {
    index: true,
    follow: true
  }
  // themeColor: "#0ea5ea",
  // other: {
  //   "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
