"use client";

import { motion } from "motion/react";
import { TextScramble } from "@/components/ui/text-scramble";
import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <main className="bg-gradient-to-b from-slate-900 via-violet-900 to-bg-slate-900 h-[100%] w-[100%]">
      <div>
        <Navbar />
      </div>
      <motion.div className="w-[80%] h-[80%] flex flex-col justify-center mx-auto">
        <span className="text-4xl text-white font-mono"></span>
        <span className="text-white text-4xl font-semibold font-mono">
          <TextScramble>Create Endless Stories</TextScramble>
        </span>
      </motion.div>
    </main>
  );
}
