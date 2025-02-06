"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter } from "lucide-react";
import "./font.css";
import { TextScramble } from "@/components/ui/text-scramble";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();

  return (
    <main className="min-h-screen flex flex-col overflow-hidden relative">
      <video
        src="/back-video.webm"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <header className="container flex items-center justify-start ml-8 py-6 relative">
        <Link
          href="/"
          className="flex items-center space-x-2 text-white libre-franklin-bold"
        >
          <span className="text-xl font-medium">PromptPay</span>
        </Link>
      </header>

      <main className="flex-1 relative z-10">
        <section className="container relative py-20 text-center z-10">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_VERCEL_URL}/geometric-bg.svg)`,
              backgroundSize: "cover",
              opacity: 0.1,
            }}
          />

          <TextScramble className="text-6xl font-medium mb-4 tracking-tight text-white libre-franklin-bold">
            PromptPay
          </TextScramble>
          <TextScramble className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto denk-one-regular">
            Humanized Artificial Intelligence Through Natural Emergence
          </TextScramble>

          <div className="flex justify-center gap-4 mb-20">
            <Button
              className="bg-[#0F1729] text-white rounded-full px-8 py-6 text-lg"
              onClick={() => navigate.push("/setup")}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="container py-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-4 md:mb-0 font-light">
            <p className="text-sm text-gray-400">© 2025 PromptPay</p>
            <p className="text-sm text-gray-400">
              Built with ❤️ by{" Chaver Labs "}
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="https://twitter.com/atulmnz"
              className="text-gray-400 hover:text-gray-600"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
