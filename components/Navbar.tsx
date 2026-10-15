"use client";

import { useState, useEffect } from "react";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";

const navLinks = [
  { label: "work", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "about", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 border-b ${
        scrolled || menuOpen
          ? "bg-background/75 backdrop-blur-md border-white/[0.06]"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-slate-200 hover:text-accent transition-colors"
        >
          anas<span className="text-accent">@</span>khan<span className="text-slate-500">:~$</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center">
          {/* Highlight pill glides between links on hover */}
          <AnimatedBackground
            enableHover
            className="rounded-md bg-white/[0.07]"
            transition={{ type: "spring", bounce: 0.15, duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                data-id={link.label}
                href={link.href}
                className="font-mono text-[13px] text-slate-400 hover:text-slate-100 px-3 py-2 rounded-md transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </AnimatedBackground>
          <a
            href="#contact"
            className="ml-3 font-mono text-[13px] px-4 py-2 bg-accent text-background font-medium rounded-md hover:bg-accent-strong active:scale-[0.97] transition-[background-color,transform] duration-200"
          >
            hire me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-300 transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-white/[0.06] px-4 py-4 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-sm text-slate-300 hover:text-accent px-2 py-2.5 rounded-md transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 font-mono text-sm px-4 py-2.5 bg-accent text-background font-medium rounded-md text-center active:scale-[0.98] transition-transform"
            onClick={() => setMenuOpen(false)}
          >
            hire me
          </a>
        </div>
      )}
    </header>
  );
}
