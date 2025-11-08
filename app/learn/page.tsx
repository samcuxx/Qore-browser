import type { Metadata } from "next";
import LearnPageClient from "./LearnPageClient";

export const metadata: Metadata = {
  title: "Learn More About Lux Browser",
  description:
    "Discover why Lux Browser is the best choice for privacy-focused, high-performance browsing on Windows. Learn about our features, privacy controls, and performance optimizations.",
  openGraph: {
    title: "Learn More About Lux Browser",
    description:
      "Discover why Lux Browser is the best choice for privacy-focused, high-performance browsing on Windows.",
    url: "https://lux-browser.samcux.tech/learn",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Learn More About Lux Browser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn More About Lux Browser",
    description:
      "Discover why Lux Browser is the best choice for privacy-focused, high-performance browsing on Windows.",
  },
  alternates: {
    canonical: "https://lux-browser.samcux.tech/learn",
  },
};

export default function LearnPage() {
  return <LearnPageClient />;
}
