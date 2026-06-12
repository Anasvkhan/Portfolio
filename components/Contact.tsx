"use client";

import { Mail, Linkedin, Phone, MapPin, Calendar } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-[#0d1224] border border-[#7c3aed]/20 p-8 md:p-12 text-center">
          {/* Eyebrow */}
          <span className="font-mono text-sm text-[#7c3aed]">// get in touch</span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Let&apos;s build something together
          </h2>

          <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto mb-10">
            Open to full-time roles, contracts, and remote work. Drop me a line or book a quick call.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#22d3ee]/40 hover:border-[#22d3ee] text-[#22d3ee] font-medium rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 text-slate-300 font-medium rounded-lg transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book a call
            </a>
          </div>

          {/* Info chips */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-mono">
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#7c3aed]" />
              {personalInfo.email}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#22d3ee]" />
              {personalInfo.phone}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-slate-600" />
              {personalInfo.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
