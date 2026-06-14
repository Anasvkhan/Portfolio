"use client";

import Terminal from "./Terminal";
import FloatingCode from "./FloatingCode";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6">
      {/* Floating code animation */}
      <FloatingCode />

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 1,
        }}
      />

      {/* All content sits above the canvas */}
      <div className="relative w-full" style={{ zIndex: 2 }}>
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <span className="font-mono text-sm text-[#7c3aed] tracking-wider">
            // backend engineer
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {personalInfo.name}
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 font-light max-w-md">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium rounded-lg transition-colors duration-200"
            >
              View my work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.cvPath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#22d3ee]/40 hover:border-[#22d3ee] text-[#22d3ee] font-medium rounded-lg transition-colors duration-200"
            >
              Download CV
            </a>
          </div>

          {/* Quick meta */}
          <div className="flex flex-wrap gap-6 pt-4 font-mono text-xs text-slate-500">
            <span>📍 {personalInfo.location}</span>
            <span>🎓 SZABIST CS '25</span>
            <span className="text-green-400">● Open to work</span>
          </div>
        </div>

        {/* Right — Terminal */}
        <div className="flex justify-center lg:justify-end">
          <Terminal />
        </div>
      </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#bento"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
        style={{ zIndex: 2 }}
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}
