"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between gap-6 border-b border-white/[0.06] pb-6">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">Experience</h2>
          <span className="font-mono text-xs text-slate-500 pb-1.5">03 / career</span>
        </div>

        <div className="max-w-4xl">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/[0.08]" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8">
                  {exp.current ? (
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                    </span>
                  ) : (
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500 border-2 border-background" />
                  )}
                </div>

                {/* Card */}
                <div className="surface border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.14] transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-slate-500" />
                        <span className="font-semibold text-white tracking-tight">{exp.company}</span>
                        {exp.current && (
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-accent/[0.06] text-accent border border-accent/25">
                            current
                          </span>
                        )}
                      </div>
                      <div className="text-slate-300 text-sm mt-0.5">{exp.role}</div>
                    </div>
                    <span className="font-mono text-xs text-slate-500 shrink-0 mt-1">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-slate-500 mt-1 shrink-0 text-xs">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education divider */}
        <div className="flex items-center gap-4 mt-12 mb-8 pl-12">
          <div className="h-px flex-1 bg-white/5" />
          <span className="font-mono text-xs text-slate-500">Education</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Education entry */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative pl-12"
        >
          <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500 border-2 border-background" />
          </div>
          <div className="surface border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.14] transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-slate-500" />
                  <span className="font-semibold text-white tracking-tight">
                    Shaheed Zulfiqar Ali Bhutto University (SZABIST)
                  </span>
                </div>
                <div className="text-slate-300 text-sm mt-1">BS Computer Science</div>
                <div className="text-slate-500 text-xs mt-0.5">Karachi, Pakistan</div>
              </div>
              <span className="font-mono text-xs text-slate-500 shrink-0 mt-1">2021 – 2025</span>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
