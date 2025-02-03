"use client";

import { motion } from "motion/react";
import { TextScramble } from "@/components/ui/text-scramble";
import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <main className="bg-gray-950 h-[100%] w-[100%]">
      <div>
        <Navbar />
      </div>
      <motion.div className="w-[80%] h-[80%] flex flex-col justify-center mx-auto">
        <span className="text-4xl text-white">DeBot</span>
        <span className="text-white text-4xl font-bold">
          <TextScramble>Create Your AI Agent</TextScramble>
        </span>
      </motion.div>
    </main>
  );
}
