"use client";

import { useEffect, useState } from "react";
import { Github, Cpu, MapPin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

function generateActivityData(): number[] {
  return Array.from({ length: 24 }, () => Math.floor(Math.random() * 8) + 2);
}

const tile =
  "surface rounded-2xl border border-white/[0.06] transition-colors duration-300 hover:border-white/[0.14]";
const label = "font-mono text-[11px] text-muted tracking-wide";

export default function BentoGrid() {
  const [activity, setActivity] = useState<number[]>([]);

  useEffect(() => {
    setActivity(generateActivityData());
  }, []);

  const maxActivity = Math.max(...(activity.length ? activity : [1]));

  return (
    <section id="bento" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">

          {/* Currently Building — full width on mobile, 2×2 on desktop */}
          <div className={`${tile} col-span-2 lg:col-span-2 lg:row-span-2 p-6 flex flex-col justify-between min-h-[160px] lg:min-h-0`}>
            <div>
              <span className={label}>Currently building</span>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <div className="text-white font-medium tracking-tight">PFC CRM</div>
                    <div className="text-muted text-sm mt-0.5">AI real estate platform</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 shrink-0" />
                  <div>
                    <div className="text-white font-medium tracking-tight">DeepSian ERP</div>
                    <div className="text-muted text-sm mt-0.5">Film & TV set ERP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-mono text-xs text-muted mt-5">@ Techvera Global</div>
          </div>

          {/* Open to work */}
          <div className={`${tile} col-span-1 p-4 flex flex-col justify-between min-h-[104px]`}>
            <span className={label}>Status</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot shrink-0" />
              <span className="text-accent text-sm font-medium">Open to work</span>
            </div>
          </div>

          {/* Primary language */}
          <div className={`${tile} col-span-1 p-4 flex flex-col justify-between min-h-[104px]`}>
            <span className={label}>Primary</span>
            <div className="mt-2">
              <div className="text-white text-sm font-medium font-mono">Node.js</div>
              <div className="text-muted text-xs mt-0.5">TypeScript</div>
            </div>
          </div>

          {/* Stats row */}
          <div className="col-span-2 lg:col-span-2 grid grid-cols-3 gap-3">
            {[
              { value: "5+", label: "projects" },
              { value: "2", label: "yrs exp" },
              { value: "3", label: "prod apps" },
            ].map((s) => (
              <div key={s.label} className={`${tile} p-4 flex flex-col justify-end min-h-[96px]`}>
                <div className="text-3xl font-semibold text-white tracking-tight tabular-nums">{s.value}</div>
                <div className="text-muted text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* GitHub activity — full width on mobile */}
          <div className={`${tile} col-span-2 lg:col-span-3 lg:row-span-2 p-6 flex flex-col gap-5 min-h-[160px]`}>
            <div className="flex items-center justify-between">
              <span className={label}>GitHub activity</span>
              <span className="font-mono text-[11px] text-muted">last 24 weeks</span>
            </div>
            <div className="flex items-end gap-1 flex-1">
              {activity.map((val, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[3px] bg-accent"
                  style={{
                    height: `${(val / maxActivity) * 100}%`,
                    opacity: val > 6 ? 0.9 : val > 4 ? 0.5 : 0.22,
                  }}
                />
              ))}
            </div>
          </div>

          {/* GitHub profiles */}
          <div className={`${tile} col-span-2 lg:col-span-3 p-6 flex flex-col gap-4`}>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-slate-400" strokeWidth={1.75} />
              <span className={label}>GitHub</span>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href: personalInfo.github1, handle: "AnasKhan199911" },
                { href: personalInfo.github2, handle: "Anasvkhan" },
              ].map((g) => (
                <a
                  key={g.handle}
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group bg-white/[0.03] border border-white/[0.04] rounded-lg px-3 py-2.5 hover:bg-white/[0.06] hover:border-white/10 transition-colors"
                >
                  <span className="font-mono text-xs text-slate-300 group-hover:text-white transition-colors">
                    {g.handle}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-accent group-hover:-translate-y-px group-hover:translate-x-px transition-[color,transform]" />
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className={`${tile} col-span-1 p-4 flex flex-col justify-between min-h-[96px]`}>
            <MapPin className="w-4 h-4 text-muted" strokeWidth={1.75} />
            <div className="mt-2">
              <div className="text-white text-sm">Karachi, PK</div>
              <div className="text-muted text-xs font-mono">UTC+5</div>
            </div>
          </div>

          {/* Stack */}
          <div className={`${tile} col-span-1 p-4 flex flex-col justify-between min-h-[96px]`}>
            <Cpu className="w-4 h-4 text-muted" strokeWidth={1.75} />
            <div className="font-mono text-xs text-slate-300 mt-2">
              Node · PG · Prisma
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
