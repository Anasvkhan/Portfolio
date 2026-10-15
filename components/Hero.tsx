"use client";

import Terminal from "./Terminal";
import FloatingCode from "./FloatingCode";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown, ArrowRight, Download, GraduationCap, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Floating code animation */}
      <FloatingCode />

      {/* Cursor-following glow (desktop only — no hover on touch) */}
      <Spotlight
        size={520}
        springOptions={{ bounce: 0, stiffness: 120, damping: 20 }}
        className="hidden md:block blur-3xl from-accent/[0.14] via-accent/[0.05] to-transparent dark:from-accent/[0.14] dark:via-accent/[0.05] dark:to-transparent"
      />

      {/* Soft accent glow, off-center */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[640px] h-[640px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #7ee2b8 0%, transparent 65%)", zIndex: 1 }}
      />

      {/* All content sits above the canvas */}
      <div className="relative w-full" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-10 items-center">
          {/* Left */}
          <div className="flex flex-col gap-7">
            <span className="inline-flex items-center gap-2 self-start font-mono text-xs text-slate-400 border border-white/[0.08] rounded-full pl-2 pr-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
              Backend engineer · open to work
            </span>

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-semibold text-white leading-[0.95] tracking-[-0.035em] text-balance">
              {personalInfo.name}
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-[34ch]">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent-strong active:scale-[0.97] transition-[background-color,transform] duration-200"
              >
                View my work
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href={personalInfo.cvPath}
                download
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/10 text-slate-200 font-medium rounded-lg hover:border-white/25 hover:bg-white/[0.03] active:scale-[0.97] transition-[border-color,background-color,transform] duration-200"
              >
                <Download className="w-4 h-4 text-slate-400" />
                Download CV
              </a>
            </div>

            {/* Quick meta */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-3 font-mono text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.75} />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" strokeWidth={1.75} />
                SZABIST CS &apos;25
              </span>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-300 transition-colors animate-bounce"
        style={{ zIndex: 2 }}
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}
