import Image from "next/image";

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

  const windowsAsset = release?.assets?.find((a) =>
    /\.(exe|msi)$/i.test(a.name)
  );

  const version = release?.tag_name ?? "v0.0.0";
  const published = release?.published_at
    ? new Date(release.published_at).toLocaleDateString()
    : undefined;

  return (
    <main className="min-h-dvh bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(0,185,193,0.16),transparent),radial-gradient(1200px_600px_at_90%_20%,rgba(0,113,188,0.16),transparent),linear-gradient(180deg,#0b1020_0%,#0a0d1a_100%)] text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
          <div className="shrink-0">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <Image
                src="/icon.svg"
                alt="Lux Browser"
                width={140}
                height={140}
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-2xl border border-white/10 bg-white/5/50 backdrop-blur p-6 md:p-8">
              <div className="flex items-center gap-2 text-cyan-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
                <span className="text-sm font-medium">
                  Available for Windows
                </span>
              </div>

              <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
                Download Lux Browser
              </h1>
              <p className="mt-2 text-slate-300">
                Fast, privacy‑first browsing. Clean, modern UI. No compromises.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 w-full max-w-xl mx-auto">
                <a
                  className="group relative col-span-1 inline-flex h-14 w-full items-center justify-between rounded-xl px-5 text-base font-medium text-white bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_8px_30px_rgb(0,185,193,0.25)] hover:shadow-[0_8px_40px_rgb(0,185,193,0.35)] transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                  href={
                    windowsAsset?.browser_download_url ??
                    release?.html_url ??
                    "https://github.com/samcuxx/my-browser/releases"
                  }
                  target="_blank"
                  rel="noreferrer noopener"
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
                </a>

                <button
                  className="col-span-1 inline-flex h-14 w-full items-center justify-center rounded-xl px-5 text-base font-medium text-slate-300 bg-white/5 border border-white/10 cursor-not-allowed"
                  disabled
                  title="Linux builds coming soon"
                >
                  Linux • Coming soon
                </button>

                <button
                  className="col-span-1 inline-flex h-14 w-full items-center justify-center rounded-xl px-5 text-base font-medium text-slate-300 bg-white/5 border border-white/10 cursor-not-allowed"
                  disabled
                  title="macOS builds coming soon"
                >
                  macOS • Coming soon
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span>
                  Latest:{" "}
                  <strong className="text-slate-200 font-medium">
                    {version}
                  </strong>
                  {published ? ` • ${published}` : ""}
                </span>
                <a
                  className="underline decoration-dotted decoration-slate-500 hover:decoration-slate-300 hover:text-slate-200"
                  href="https://github.com/samcuxx/my-browser/releases"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View all releases
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
