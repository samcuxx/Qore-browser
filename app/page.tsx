"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="hero">
      <div className="container">
        <div className="left">
          <div className="logoWrap">
            <Image
              src="/icon.svg"
              alt="Qore Browser logo"
              width={420}
              height={420}
              priority
            />
          </div>
        </div>
        <div className="right">
          <span className="eyebrow">Introducing</span>
          <h1 className="title">Qore Browser</h1>
          <p className="subtitle">
            A faster, privacy‑first browser with a clean, modern interface.
            Browse without compromise—speed, security, and serenity in every
            tab.
          </p>
          <div className="ctaRow">
            <a className="btn primary" href="#download">
              Download
            </a>
            <a className="btn ghost" href="#learn">
              Learn more
            </a>
          </div>
          <div className="meta">
            <span>• Private by default</span>
            <span>• Tracker blocking</span>
            <span>• Lightning‑fast performance</span>
          </div>
        </div>
      </div>

      <style jsx>{`
      
      `}</style>
    </main>
  );
}
