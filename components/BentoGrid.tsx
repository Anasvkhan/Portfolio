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
    <section id="bento" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[120px]">

          {/* Currently Building — 2 cols × 2 rows */}
          <div className="col-span-2 row-span-2 rounded-2xl bg-[#0d1224] border border-white/5 p-5 flex flex-col justify-between hover:border-[#7c3aed]/40 transition-colors">
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
                    <div className="text-slate-500 text-xs mt-0.5">Film & TV Set Construction ERP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-mono text-xs text-slate-600">@ Techvera Global</div>
          </div>

          {/* Open to work */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-between hover:border-green-500/40 transition-colors">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">status</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 pulse-dot shrink-0" />
              <span className="text-green-400 text-sm font-medium">Open to work</span>
            </div>
          </div>

          {/* Primary language */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-between hover:border-[#22d3ee]/40 transition-colors">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">primary</span>
            <div>
              <div className="text-[#22d3ee] text-sm font-medium font-mono">Node.js</div>
              <div className="text-slate-500 text-xs">TypeScript</div>
            </div>
          </div>

          {/* Stats */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-center items-center hover:border-[#7c3aed]/40 transition-colors">
            <div className="text-3xl font-bold text-white">5+</div>
            <div className="text-slate-500 text-xs mt-1 text-center">projects</div>
          </div>

          <div className="col-span-1 row-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-center items-center hover:border-[#7c3aed]/40 transition-colors">
            <div className="text-3xl font-bold text-white">2</div>
            <div className="text-slate-500 text-xs mt-1 text-center">yrs exp</div>
          </div>

          <div className="col-span-1 row-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-center items-center hover:border-[#7c3aed]/40 transition-colors">
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-slate-500 text-xs mt-1 text-center">prod apps</div>
          </div>

          {/* GitHub activity — 3 cols × 2 rows */}
          <div className="col-span-2 md:col-span-3 row-span-2 rounded-2xl bg-[#0d1224] border border-white/5 p-5 flex flex-col gap-4 hover:border-[#7c3aed]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                github activity
              </span>
              <span className="font-mono text-xs text-slate-600">last 24 weeks</span>
            </div>
            <div className="flex items-end gap-1 flex-1">
              {activity.map((val, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-all duration-300"
                  style={{
                    height: `${(val / maxActivity) * 100}%`,
                    backgroundColor:
                      val > 6
                        ? "#7c3aed"
                        : val > 4
                        ? "#7c3aed99"
                        : "#7c3aed44",
                  }}
                />
              ))}
            </div>
          </div>

          {/* GitHub profiles — 2 cols × 2 rows */}
          <div className="col-span-2 row-span-2 rounded-2xl bg-[#0d1224] border border-white/5 p-5 flex flex-col gap-4 hover:border-[#22d3ee]/40 transition-colors">
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-[#22d3ee]" />
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
                github
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={personalInfo.github1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group bg-white/5 rounded-lg px-3 py-2 hover:bg-[#7c3aed]/10 transition-colors"
              >
                <span className="font-mono text-xs text-slate-300 group-hover:text-[#22d3ee] transition-colors">
                  AnasKhan199911
                </span>
                <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-[#22d3ee] transition-colors" />
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
                <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-[#22d3ee] transition-colors" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-between hover:border-[#22d3ee]/40 transition-colors">
            <MapPin className="w-4 h-4 text-[#22d3ee]" />
            <div>
              <div className="text-white text-sm">Karachi, PK</div>
              <div className="text-slate-500 text-xs">UTC+5</div>
            </div>
          </div>

          {/* Stack badge */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-[#0d1224] border border-white/5 p-4 flex flex-col justify-between hover:border-[#7c3aed]/40 transition-colors">
            <Cpu className="w-4 h-4 text-[#7c3aed]" />
            <div className="font-mono text-xs text-slate-400">
              Node · PG · Prisma
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
