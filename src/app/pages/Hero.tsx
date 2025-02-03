"use client";

import { motion } from "motion/react";
import { TextScramble } from "@/components/ui/text-scramble";
import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <motion.div>
        <TextScramble>Create Your AI Agent </TextScramble>
      </motion.div>
    </main>
  );
}
