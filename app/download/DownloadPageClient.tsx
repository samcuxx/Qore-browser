"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "../components/ThemeToggle";

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

function formatBytes(bytes: number): string {
  if (!bytes) return "";
  const units = ["B", "KB", "MB", "GB", "TB"] as const;
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(size < 10 ? 1 : 0)} ${units[unitIndex]}`;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

type DownloadPageClientProps = {
  release: GitHubRelease | null;
};

export default function DownloadPageClient({
  release,
}: DownloadPageClientProps) {
  const windowsAsset = release?.assets?.find((a) =>
    /\.(exe|msi)$/i.test(a.name)
  );

  const version = release?.tag_name ?? "v0.0.0";
  const published = release?.published_at
    ? new Date(release.published_at).toLocaleDateString()
    : undefined;

  return (
    <main className="min-h-dvh bg-gradient-to-br from-slate-50 to-white dark:from-[#0b1020] dark:to-[#0a0d1a] dark:bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(0,185,193,0.16),transparent),radial-gradient(1200px_600px_at_90%_20%,rgba(0,113,188,0.16),transparent),linear-gradient(180deg,#0b1020_0%,#0a0d1a_100%)] text-slate-900 dark:text-slate-100 flex items-center justify-center p-6 transition-colors duration-300">
      {/* <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div> */}
      <motion.div
        className="w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mb-6 group"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </Link>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
          <motion.div className="shrink-0" variants={itemVariants}>
            <Link
              href="/"
              className="block rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-6 hover:bg-white dark:hover:bg-white/10 transition-colors cursor-pointer shadow-lg dark:shadow-none"
            >
              <Image
                src="/icon.svg"
                alt="Lux Browser"
                width={140}
                height={140}
              />
            </Link>
          </motion.div>

          <motion.div className="flex-1" variants={itemVariants}>
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-lg dark:shadow-none">
              <motion.div
                className="flex items-center gap-2 text-cyan-600 dark:text-cyan-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400"></span>
                <span className="text-sm font-medium">
                  Available for Windows
                </span>
              </motion.div>

              <motion.h1
                className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Download Lux Browser
              </motion.h1>
              <motion.p
                className="mt-2 text-slate-600 dark:text-slate-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Get the latest version for Windows. Simple installer, quick
                setup.
              </motion.p>

              <motion.div
                className="mt-6 grid grid-cols-1 gap-3 w-full max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.a
                  className="group relative col-span-1 inline-flex h-14 w-full items-center justify-between rounded-xl px-5 text-base font-medium text-white bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_8px_30px_rgb(0,185,193,0.25)] hover:shadow-[0_8px_40px_rgb(0,185,193,0.35)] transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                  href={
                    windowsAsset?.browser_download_url ??
                    release?.html_url ??
                    "https://github.com/samcuxx/my-browser/releases"
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="inline-flex items-center gap-3 truncate">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5 opacity-90"
                    >
                      <path
                        d="M12 3v12m0 0 4-4m-4 4-4-4M4 18h16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="whitespace-nowrap">
                      Download for Windows
                    </span>
                  </span>
                  <span className="ml-4 text-white/80 text-sm whitespace-nowrap">
                    {version}
                    {windowsAsset?.size
                      ? ` • ${formatBytes(windowsAsset.size)}`
                      : ""}
                  </span>
                </motion.a>

                <motion.button
                  className="col-span-1 inline-flex h-14 w-full items-center justify-center rounded-xl px-5 text-base font-medium text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 cursor-not-allowed"
                  disabled
                  title="Linux builds coming soon"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 0.5 }}
                >
                  Linux • Coming soon
                </motion.button>

                <motion.button
                  className="col-span-1 inline-flex h-14 w-full items-center justify-center rounded-xl px-5 text-base font-medium text-slate-500 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 cursor-not-allowed"
                  disabled
                  title="macOS builds coming soon"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 0.5 }}
                >
                  macOS • Coming soon
                </motion.button>
              </motion.div>

              <motion.div
                className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <span>
                  Latest:{" "}
                  <strong className="text-slate-700 dark:text-slate-200 font-medium">
                    {version}
                  </strong>
                  {published ? ` • ${published}` : ""}
                </span>
                <a
                  className="underline decoration-dotted decoration-slate-400 dark:decoration-slate-500 hover:decoration-slate-600 dark:hover:decoration-slate-300 hover:text-slate-700 dark:hover:text-slate-200"
                  href="https://github.com/samcuxx/my-browser/releases"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View all releases
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
