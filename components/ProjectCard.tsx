"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Project } from "@/data/portfolio";

const TYPE_COLORS: Record<string, string> = {
  Production: "text-green-400 bg-green-400/10 border-green-400/20",
  Personal: "text-[#22d3ee] bg-[#22d3ee]/10 border-[#22d3ee]/20",
  FYP: "text-[#7c3aed] bg-[#7c3aed]/10 border-[#7c3aed]/20",
};

const STACK_COLORS = [
  "bg-[#7c3aed]/15 text-[#a78bfa] border-[#7c3aed]/20",
  "bg-[#22d3ee]/10 text-[#67e8f9] border-[#22d3ee]/20",
  "bg-white/5 text-slate-400 border-white/10",
];

interface Props {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative rounded-2xl bg-[#0d1224] border transition-all duration-300 ${
        expanded || featured
          ? "border-[#7c3aed]/40 shadow-lg shadow-[#7c3aed]/10"
          : "border-white/5 hover:border-[#7c3aed]/40 hover:shadow-lg hover:shadow-[#7c3aed]/5 hover:-translate-y-0.5"
      } ${featured ? "p-6" : "p-5"}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className={`font-bold text-white ${featured ? "text-xl" : "text-base"}`}>
              {project.name}
            </h3>
            <span
              className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${TYPE_COLORS[project.type]}`}
            >
              {project.type}
            </span>
          </div>
          <p className="text-slate-400 text-sm mt-1">{project.shortDesc}</p>
        </div>
      </div>

      {/* Description — only featured shows full desc */}
      {featured && (
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
      )}

      {/* Stack pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech, i) => (
          <span
            key={tech}
            className={`font-mono text-[10px] px-2 py-0.5 rounded-md border ${
              STACK_COLORS[i % STACK_COLORS.length]
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable details — only for featured projects */}
      {featured && project.details && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 font-mono text-xs text-[#7c3aed] hover:text-[#a78bfa] transition-colors"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
            {expanded ? "hide tech details" : "show tech details"}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-[#7c3aed] mt-1 shrink-0">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
