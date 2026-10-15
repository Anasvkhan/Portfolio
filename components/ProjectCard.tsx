"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Project } from "@/data/portfolio";

const TYPE_STYLES: Record<string, string> = {
  Production: "text-accent border-accent/25 bg-accent/[0.06]",
  Personal: "text-slate-300 border-white/10 bg-white/[0.03]",
  FYP: "text-slate-400 border-white/10 bg-white/[0.03]",
};

interface Props {
  project: Project;
  featured?: boolean;
}

function TypeBadge({ type }: { type: string }) {
  return (
    <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${TYPE_STYLES[type]}`}>
      {type}
    </span>
  );
}

export default function ProjectCard({ project, featured = false }: Props) {
  const [expanded, setExpanded] = useState(false);

  // Non-featured projects render as a compact index row
  if (!featured) {
    return (
      <div className="group grid sm:grid-cols-[minmax(0,14rem)_1fr_auto] gap-x-8 gap-y-2 items-baseline py-5 border-b border-white/[0.06] sm:px-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h4 className="font-medium text-white tracking-tight group-hover:text-accent transition-colors">
            {project.name}
          </h4>
          <TypeBadge type={project.type} />
        </div>
        <p className="text-slate-400 text-sm">{project.shortDesc}</p>
        <div className="font-mono text-[11px] text-muted sm:text-right">
          {project.stack.slice(0, 3).join(" · ")}
        </div>
      </div>
    );
  }

  return (
    <div className="surface group relative rounded-2xl border border-white/[0.06] hover:border-white/[0.14] p-6 sm:p-7 flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 flex-wrap mb-2">
        <h3 className="text-2xl font-semibold text-white tracking-[-0.02em]">{project.name}</h3>
        <TypeBadge type={project.type} />
      </div>
      <p className="text-slate-300 text-sm">{project.shortDesc}</p>

      <p className="text-slate-400 text-sm leading-relaxed mt-4 mb-6 max-w-[60ch]">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2 py-0.5 rounded-md border border-white/[0.08] text-slate-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable details */}
      {project.details && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="self-start flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-accent transition-colors"
          >
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
            {expanded ? "Hide technical details" : "Technical details"}
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2.5 border-l border-white/[0.08] pl-4">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm text-slate-400 leading-relaxed">
                      {detail}
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
