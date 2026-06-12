"use client";

import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-sm text-[#7c3aed]">// selected work</span>
          <h2 className="text-3xl font-bold text-white mt-2">Projects</h2>
        </div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-px flex-1 bg-white/5" />
          <span className="font-mono text-xs text-slate-600">other projects</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Rest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
