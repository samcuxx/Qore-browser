"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <main className="hero">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="left" variants={itemVariants}>
          <motion.div className="logoWrap" variants={logoVariants}>
            <Image
              src="/icon.svg"
              alt="Lux Browser logo"
              width={420}
              height={420}
              priority
            />
          </motion.div>
        </motion.div>
        <motion.div className="right" variants={containerVariants}>
          <motion.span className="eyebrow" variants={itemVariants}>
            New
          </motion.span>
          <motion.h1 className="title" variants={itemVariants}>
            Lux Browser
          </motion.h1>
          <motion.p className="subtitle" variants={itemVariants}>
            Built for speed and privacy. Lux gives you a clean interface and
            powerful controls over your browsing experience without the bloat.
          </motion.p>
          <motion.div className="ctaRow" variants={itemVariants}>
            <motion.a
              className="btn primary"
              href="/download"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download
            </motion.a>
            <motion.a
              className="btn ghost"
              href="#learn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
            </motion.a>
          </motion.div>
          <motion.div className="meta" variants={itemVariants}>
            <motion.div
              className="metaItem"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              • Blocks trackers automatically
            </motion.div>
            <motion.div
              className="metaItem"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.5 }}
            >
              • Minimal resource usage
            </motion.div>
            <motion.div
              className="metaItem"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              • Privacy controls built-in
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{``}</style>
    </main>
  );
}
