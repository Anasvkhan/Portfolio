"use client";

import { useEffect, useState } from "react";
import { Github, Cpu, MapPin, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

function generateActivityData(): number[] {
  return Array.from({ length: 24 }, () => Math.floor(Math.random() * 8) + 2);
}

export default function BentoGrid() {
  const [activity, setActivity] = useState<number[]>([]);

  useEffect(() => {
    setActivity(generateActivityData());
  }, []);

  const maxActivity = Math.max(...(activity.length ? activity : [1]));

  return (
    <section id="bento" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">

          {/* Currently Building — full width on mobile, 2×2 on desktop */}
          <div className="col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl bg-[#0d1224] border border-white/5 p-5 flex flex-col justify-between min-h-[140px] lg:min-h-0 hover:border-[#7c3aed]/40 transition-colors">
            <div>
              <span className="font-mono text-xs text-[#7c3aed] uppercase tracking-widest">
                currently building
              </span>
              <div className="mt-3 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#22d3ee] mt-1.5 shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium">PFC CRM</div>
                    <div className="text-slate-500 text-xs mt-0.5">AI Real Estate Platform</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#7c3aed] mt-1.5 shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium">DeepSian ERP</div>
                    <div className="text-slate-500 text-xs mt-0.5">Film & TV Set ERP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-mono text-xs text-slate-600 mt-3">@ Techvera Global</div>
          </div>

          {/* Open to work */}
          <div className="col-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-between min-h-[100px] hover:border-green-500/40 transition-colors">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">status</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot shrink-0" />
              <span className="text-green-400 text-xs font-medium">Open to work</span>
            </div>
          </div>

          {/* Primary language */}
          <div className="col-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-between min-h-[100px] hover:border-[#22d3ee]/40 transition-colors">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">primary</span>
            <div className="mt-2">
              <div className="text-[#22d3ee] text-sm font-medium font-mono">Node.js</div>
              <div className="text-slate-500 text-xs">TypeScript</div>
            </div>
          </div>

          {/* Stats row */}
          <div className="col-span-2 lg:col-span-2 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[#0d1224] border border-white/5 p-3 flex flex-col justify-center items-center min-h-[90px] hover:border-[#7c3aed]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-white">5+</div>
              <div className="text-slate-500 text-[10px] mt-1 text-center">projects</div>
            </div>
            <div className="rounded-2xl bg-[#0d1224] border border-white/5 p-3 flex flex-col justify-center items-center min-h-[90px] hover:border-[#7c3aed]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-white">2</div>
              <div className="text-slate-500 text-[10px] mt-1 text-center">yrs exp</div>
            </div>
            <div className="rounded-2xl bg-[#0d1224] border border-white/5 p-3 flex flex-col justify-center items-center min-h-[90px] hover:border-[#7c3aed]/40 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-white">3</div>
              <div className="text-slate-500 text-[10px] mt-1 text-center">prod apps</div>
            </div>
          </div>

          {/* GitHub activity — full width on mobile */}
          <div className="col-span-2 lg:col-span-3 lg:row-span-2 rounded-2xl bg-[#0d1224] border border-white/5 p-5 flex flex-col gap-4 hover:border-[#7c3aed]/40 transition-colors min-h-[140px]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                github activity
              </span>
              <span className="font-mono text-xs text-slate-600">last 24 weeks</span>
            </div>
            <div className="flex items-end gap-0.5 flex-1">
              {activity.map((val, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${(val / maxActivity) * 100}%`,
                    backgroundColor:
                      val > 6 ? "#7c3aed" : val > 4 ? "#7c3aed99" : "#7c3aed44",
                  }}
                />
              ))}
            </div>
          </div>

          {/* GitHub profiles */}
          <div className="col-span-2 lg:col-span-3 rounded-2xl bg-[#0d1224] border border-white/5 p-5 flex flex-col gap-4 hover:border-[#22d3ee]/40 transition-colors">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-[#22d3ee]" />
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">github</span>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href={personalInfo.github1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group bg-white/5 rounded-lg px-3 py-2 hover:bg-[#7c3aed]/10 transition-colors"
              >
                <span className="font-mono text-xs text-slate-300 group-hover:text-[#22d3ee] transition-colors">
                  AnasKhan199911
                </span>
                <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-[#22d3ee]" />
              </a>
              <a
                href={personalInfo.github2}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group bg-white/5 rounded-lg px-3 py-2 hover:bg-[#7c3aed]/10 transition-colors"
              >
                <span className="font-mono text-xs text-slate-300 group-hover:text-[#22d3ee] transition-colors">
                  Anasvkhan
                </span>
                <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-[#22d3ee]" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="col-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-between min-h-[90px] hover:border-[#22d3ee]/40 transition-colors">
            <MapPin className="w-4 h-4 text-[#22d3ee]" />
            <div className="mt-2">
              <div className="text-white text-sm">Karachi, PK</div>
              <div className="text-slate-500 text-xs">UTC+5</div>
            </div>
          </div>

          {/* Stack */}
          <div className="col-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-between min-h-[90px] hover:border-[#7c3aed]/40 transition-colors">
            <Cpu className="w-4 h-4 text-[#7c3aed]" />
            <div className="font-mono text-xs text-slate-400 mt-2">
              Node · PG · Prisma
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
