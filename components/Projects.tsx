"use client";

import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between gap-6 border-b border-white/[0.06] pb-6">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">Projects</h2>
          <span className="font-mono text-xs text-slate-500 pb-1.5">02 / selected work</span>
        </div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-4">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>

        {/* Rest — an index list instead of another card grid */}
        <div className="mt-16">
          <h3 className="font-mono text-xs text-slate-500 mb-2">Other projects</h3>
          <ul className="border-t border-white/[0.06]">
            {/* Highlight slides between rows on hover */}
            <AnimatedBackground
              enableHover
              className="rounded-lg bg-white/[0.035]"
              transition={{ type: "spring", bounce: 0.1, duration: 0.35 }}
            >
              {rest.map((p) => (
                <li key={p.id} data-id={String(p.id)} className="flex w-full [&>div]:w-full">
                  <ProjectCard project={p} />
                </li>
              ))}
            </AnimatedBackground>
          </ul>
        </div>
      </div>
    </section>
  );
}
