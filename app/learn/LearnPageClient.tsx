"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "../components/ThemeToggle";

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

const features = [
  {
    title: "Privacy First",
    description:
      "Built-in tracker blocking and privacy controls give you complete control over your data. No tracking, no profiling.",
    icon: "🔒",
  },
  {
    title: "Lightning Fast",
    description:
      "Optimized for performance with minimal resource usage. Pages load faster, tabs stay responsive, even with dozens open.",
    icon: "⚡",
  },
  {
    title: "Clean Interface",
    description:
      "A modern, distraction-free interface that puts content first. Customize your experience without the clutter.",
    icon: "✨",
  },
  {
    title: "Resource Efficient",
    description:
      "Uses less memory and CPU than traditional browsers. Your system stays responsive while you browse.",
    icon: "💚",
  },
  {
    title: "Secure by Default",
    description:
      "Automatic security updates and built-in protection against malicious sites. Browse with confidence.",
    icon: "🛡️",
  },
  {
    title: "Windows Optimized",
    description:
      "Designed specifically for Windows with native performance and seamless integration with your system.",
    icon: "🪟",
  },
];

export default function LearnPageClient() {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-slate-50 to-white dark:from-[#0b1020] dark:to-[#0a0d1a] dark:bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(99,102,241,0.2),transparent),radial-gradient(1200px_600px_at_90%_20%,rgba(16,185,129,0.18),transparent),linear-gradient(180deg,#0b1020_0%,#0a0d1a_100%)] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div> */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mb-8 group"
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

            <div className="text-center mb-16">
              <motion.h1
                variants={itemVariants}
                className="text-[clamp(48px,7vw,72px)] leading-[1.05] tracking-[-0.03em] font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-green-500 dark:from-white dark:via-blue-200 dark:to-green-200 bg-clip-text text-transparent m-0"
              >
                Why Lux Browser?
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
              >
                A browser built for the modern web—fast, private, and designed
                to stay out of your way.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-6 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 mb-20 items-center"
          >
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Privacy That Matters
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Every website you visit tries to track you. Lux blocks trackers
                automatically, giving you a cleaner, faster browsing experience
                without sacrificing functionality.
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1">
                    ✓
                  </span>
                  <span>Automatic tracker blocking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1">
                    ✓
                  </span>
                  <span>No data collection or profiling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1">
                    ✓
                  </span>
                  <span>Granular privacy controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1">
                    ✓
                  </span>
                  <span>Private browsing by default</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-8 shadow-lg dark:shadow-none"
            >
              <Image
                src="/icon.svg"
                alt="Lux Browser"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 mb-20 items-center"
          >
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-600/10 backdrop-blur p-8 shadow-lg dark:shadow-none"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">
                    Memory Usage
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    -40%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">
                    CPU Usage
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    -35%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">
                    Page Load Speed
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    +25%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-300">
                    Battery Life
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    +20%
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Performance You Can Feel
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Built from the ground up for efficiency. Lux uses less
                resources, loads pages faster, and keeps your system responsive
                even with multiple tabs open.
              </p>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1">
                    ✓
                  </span>
                  <span>Optimized memory management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1">
                    ✓
                  </span>
                  <span>Faster page rendering</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1">
                    ✓
                  </span>
                  <span>Efficient tab handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 mt-1">
                    ✓
                  </span>
                  <span>Lower battery consumption</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className=" rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-500/10 dark:to-blue-600/10 backdrop-blur p-8 shadow-lg dark:shadow-none "
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white text-center"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
            >
              Download Lux Browser and experience the difference. Free, fast,
              and private.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center"
            >
              <motion.a
                href="/download"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base bg-gradient-to-r from-orange-400 to-green-400 text-gray-900 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Now
              </motion.a>
              <motion.a
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base bg-white/60 dark:bg-white/10 border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white hover:bg-white/80 dark:hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Back to Home
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

