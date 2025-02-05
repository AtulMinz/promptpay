"use client";

import { TextScramble } from "@/components/ui/text-scramble";
import { motion } from "motion/react";
import SplineElement from "@/components/spline";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <motion.div className="bg-gray-950 w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <Navbar />
        <motion.div className="flex flex-col justify-center items-center">
          <motion.div className="flex justify-center items-center">
            <TextScramble className="font-extrabold text-6xl text-slate-200 font-serif">
              Create your web3 friend
            </TextScramble>
          </motion.div>
          <div>
            <SplineElement />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
