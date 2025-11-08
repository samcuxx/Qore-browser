"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeToggle } from "./components/ThemeToggle";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-slate-50 to-white dark:from-[#0b1020] dark:to-[#0a0d1a] dark:bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(99,102,241,0.2),transparent),radial-gradient(1200px_600px_at_90%_20%,rgba(16,185,129,0.18),transparent),linear-gradient(180deg,#0b1020_0%,#0a0d1a_100%)] text-slate-900 dark:text-slate-100 grid place-items-center p-12 md:p-6 transition-colors duration-300">
      {/* <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div> */}
      <motion.div
        className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex justify-center" variants={itemVariants}>
          <motion.div
            className="w-full max-w-[460px] aspect-square rounded-[28px] backdrop-blur-sm"
            variants={logoVariants}
          >
            <Image
              src="/icon.svg"
              alt="Lux Browser logo"
              width={420}
              height={420}
              priority
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-5 text-center md:text-left"
          variants={containerVariants}
        >
          <motion.span
            className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 mb-1"
            variants={itemVariants}
          >
            New
          </motion.span>
          <motion.h1
            className="text-[clamp(48px,7vw,72px)] leading-[1.05] tracking-[-0.03em] font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-green-500 dark:from-white dark:via-blue-200 dark:to-green-200 bg-clip-text text-transparent m-0"
            variants={itemVariants}
          >
            Lux Browser
          </motion.h1>
          <motion.p
            className="text-[clamp(17px,2.4vw,20px)] leading-[1.65] tracking-[-0.01em] text-slate-600 dark:text-slate-300 font-normal max-w-[540px] m-0 mx-auto md:mx-0"
            variants={itemVariants}
          >
            Built for speed and privacy. Lux gives you a clean interface and
            powerful controls over your browsing experience without the bloat.
          </motion.p>
          <motion.div
            className="flex gap-3.5 mt-1 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a
              className="inline-flex items-center justify-center gap-2.5 h-[50px] px-6 rounded-[14px] font-semibold text-[15px] tracking-[-0.01em] bg-gradient-to-r from-orange-400 to-green-400 text-gray-900 shadow-[0_10px_24px_rgba(79,70,229,0.35),0_6px_12px_rgba(34,197,94,0.2)] hover:-translate-y-0.5 transition-transform"
              href="/download"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download
            </motion.a>
            <motion.a
              className="inline-flex items-center justify-center gap-2.5 h-[50px] px-6 rounded-[14px] font-semibold text-[15px] tracking-[-0.01em] bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-slate-100 hover:bg-white/80 dark:hover:bg-white/10 transition-colors"
              href="/learn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 mt-3 text-[15px] font-normal tracking-[-0.01em] text-slate-500 dark:text-slate-400"
            variants={itemVariants}
          >
            <motion.div
              className="transition-colors hover:text-slate-700 dark:hover:text-slate-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              • Blocks trackers automatically
            </motion.div>
            <motion.div
              className="transition-colors hover:text-slate-700 dark:hover:text-slate-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.5 }}
            >
              • Minimal resource usage
            </motion.div>
            <motion.div
              className="transition-colors hover:text-slate-700 dark:hover:text-slate-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              • Privacy controls built-in
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
