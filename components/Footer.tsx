import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-slate-600">
          // anas khan · 2025 · built with next.js
        </span>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github1}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-[#22d3ee] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.github2}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-[#22d3ee] transition-colors"
            aria-label="GitHub (alt)"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-[#22d3ee] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-600 hover:text-[#22d3ee] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
