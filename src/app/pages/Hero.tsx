"use client";

import { motion } from "motion/react";
import { TextScramble } from "@/components/ui/text-scramble";
import Navbar from "@/components/navbar";
import { AnimatedBeamDemo } from "@/components/hero-beam";

export default function Hero() {
  return (
    <motion.div className="bg-gray-950 h-[100vh] w-[100vw] flex flex-col items-center">
      <Navbar />
      <motion.div className="border border-gray-200 border-opacity-50 w-[80%] h-[80%]">
        <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ADE80] bg-clip-text text-transparent text-4xl">
          DeBot
        </span>
        <TextScramble className="text-2xl font-mono font-semibold -tracking-widest text-white">
          Create Your AI Agent in one go
        </TextScramble>
        {/* <AnimatedBeamDemo /> */}
      </motion.div>
    </motion.div>
  );
}
