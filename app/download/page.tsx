import type { Metadata } from "next";
import DownloadPageClient from "./DownloadPageClient";

export const metadata: Metadata = {
  title: "Download Lux Browser",
  description:
    "Download Lux Browser for Windows. Get the latest version with privacy controls, tracker blocking, and optimized performance.",
  keywords: [
    "download Lux Browser",
    "Lux Browser Windows",
    "browser download",
    "privacy browser download",
    "Windows browser download",
    "free browser download",
  ],
  openGraph: {
    title: "Download Lux Browser",
    description:
      "Download Lux Browser for Windows. Get the latest version with privacy controls, tracker blocking, and optimized performance.",
    url: "https://lux-browser.samcux.tech/download",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Download Lux Browser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Lux Browser",
    description:
      "Download Lux Browser for Windows. Get the latest version with privacy controls, tracker blocking, and optimized performance.",
  },
  alternates: {
    canonical: "https://lux-browser.samcux.tech/download",
  },
};

type GitHubAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type GitHubRelease = {
  tag_name: string;
  name?: string;
  body?: string;
  published_at: string;
  html_url: string;
  assets: GitHubAsset[];
};

async function getLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/samcuxx/my-browser/releases/latest",
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as GitHubRelease;
    return data;
  } catch {
    return null;
  }
}

export default async function DownloadPage() {
  const release = await getLatestRelease();

  return <DownloadPageClient release={release} />;
}
