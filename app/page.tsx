"use client";

import { motion } from "motion/react";
import { FeatureBentoGrid } from "./_components/FeatureBentoGrid";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import  Link  from "next/link";

export default function HeroSectionOne() {
  return (
    <div className="relative  flex flex-col items-center justify-center">
      <Navbar />

      {/* Left Line */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
      </div>

      {/* Right Line */}
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
      </div>

      {/* Bottom Line */}
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      </div>

      <div className="px-4 py-10 md:py-20">
        {/* Heading */}
        <h1 className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-extrabold text-slate-800 md:text-5xl lg:text-7xl dark:text-slate-200">
          {"AI-powered medical voice agents for smarter patient care"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(6px)", y: 14 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="relative z-10 mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          Enable hospitals and clinics to automate symptom collection,
          appointment scheduling, and patient follow-ups using secure,
          voice-driven AI — available 24/7.
        </motion.p>

        {/* Buttons */}
        <Link href="/sign-in">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-5"
          >
            <button className="w-60 rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700">
              Get Started
            </button>
          </motion.div>
        </Link>

        {/* Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.3 }}
        ></motion.div>
      </div>

      <FeatureBentoGrid />
    </div>
  );
}

/* Navbar */
const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full" />
        {/* <img src="./logo.png" alt="Onestep Logo" className="size-15 rounded-full" /> */}
        <h1 className="text-lg font-bold md:text-2xl">Onestep</h1>
      </div>

      {!user ? (
        <Link href="/sign-in">
          <button className="w-28 rounded-xl bg-neutral-900 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
            Login
          </button>
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          <UserButton />
          <Button>Dashboard</Button>
        </div>
      )}
    </nav>
  );
};
