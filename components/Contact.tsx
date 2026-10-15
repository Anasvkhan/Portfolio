"use client";

import { Mail, Linkedin, Phone, MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="surface relative overflow-hidden rounded-3xl border border-white/[0.06] p-8 sm:p-12 lg:p-16 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          {/* Corner glow */}
          <div
            aria-hidden
            className="absolute -bottom-48 -right-32 w-[520px] h-[520px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #7ee2b8 0%, transparent 65%)" }}
          />

          {/* Left — pitch */}
          <div className="relative">
            <span className="font-mono text-xs text-muted">04 / contact</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.035em] leading-[1.02] mt-4 mb-5 text-balance">
              Let&apos;s build something together
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-[44ch] mb-9">
              Open to full-time roles, contracts, and remote work. Drop me a line or book a quick call.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent-strong active:scale-[0.97] transition-[background-color,transform] duration-200"
              >
                <Mail className="w-4 h-4" />
                Email me
              </a>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/10 text-slate-200 font-medium rounded-lg hover:border-white/25 hover:bg-white/[0.03] active:scale-[0.97] transition-[border-color,background-color,transform] duration-200"
              >
                <Calendar className="w-4 h-4 text-slate-400" />
                Book a call
              </a>
            </div>
          </div>

          {/* Right — direct details */}
          <ul className="relative self-end divide-y divide-white/[0.06] border-y border-white/[0.06]">
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3 py-4 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-muted" strokeWidth={1.75} />
                <span className="font-mono truncate">{personalInfo.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-muted group-hover:text-accent transition-colors" />
              </a>
            </li>
            <li>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-4 text-sm text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-muted" strokeWidth={1.75} />
                <span className="font-mono">LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-muted group-hover:text-accent transition-colors" />
              </a>
            </li>
            <li className="flex items-center gap-3 py-4 text-sm text-slate-400">
              <Phone className="w-4 h-4 text-muted" strokeWidth={1.75} />
              <span className="font-mono">{personalInfo.phone}</span>
            </li>
            <li className="flex items-center gap-3 py-4 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-muted" strokeWidth={1.75} />
              <span className="font-mono">{personalInfo.location}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
