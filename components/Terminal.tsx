"use client";

import { useEffect, useState } from "react";

const STACK_JSON = `{
  "runtime": "Node.js",
  "framework": "Express / Next.js",
  "databases": ["PostgreSQL", "MongoDB"],
  "orm": "Prisma",
  "auth": "Supabase / JWT",
  "cloud": ["Vercel", "Render", "AWS SES"]
}`;

interface Line {
  type: "command" | "output" | "empty";
  text: string;
}

const SCRIPT: Array<{ cmd: string; output: string }> = [
  {
    cmd: "$ whoami",
    output: "Muhammad Anas Khan — Backend Engineer",
  },
  {
    cmd: "$ cat stack.json",
    output: STACK_JSON,
  },
  {
    cmd: "$ ./status.sh",
    output: "✓ Available for new projects",
  },
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [currentCmd, setCurrentCmd] = useState("");
  const [phase, setPhase] = useState<"typing" | "output" | "pause" | "done">("pause");
  const [scriptIdx, setScriptIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (scriptIdx >= SCRIPT.length) {
      setPhase("done");
      return;
    }

    const entry = SCRIPT[scriptIdx];

    if (phase === "pause") {
      const t = setTimeout(() => setPhase("typing"), 600);
      return () => clearTimeout(t);
    }

    if (phase === "typing") {
      if (charIdx < entry.cmd.length) {
        const t = setTimeout(() => {
          setCurrentCmd(entry.cmd.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("output"), 300);
        return () => clearTimeout(t);
      }
    }

    if (phase === "output") {
      setLines((prev) => [
        ...prev,
        { type: "command", text: entry.cmd },
        { type: "output", text: entry.output },
        { type: "empty", text: "" },
      ]);
      setCurrentCmd("");
      setCharIdx(0);
      setScriptIdx((i) => i + 1);
      setPhase("pause");
    }
  }, [phase, scriptIdx, charIdx]);

  return (
    <div className="w-full max-w-[520px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Window chrome */}
      <div className="bg-[#1a1f2e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-4 font-mono text-xs text-slate-500">bash — 80×24</span>
      </div>

      {/* Terminal body */}
      <div className="bg-[#0d1224] p-5 font-mono text-sm min-h-[280px] leading-relaxed">
        {lines.map((line, i) => {
          if (line.type === "empty") return <div key={i} className="h-2" />;
          if (line.type === "command")
            return (
              <div key={i} className="text-[#22d3ee]">
                {line.text}
              </div>
            );
          return (
            <div key={i} className="text-slate-300 whitespace-pre-wrap pl-2">
              {line.text}
            </div>
          );
        })}

        {/* Current typing line */}
        {phase !== "done" && (
          <div className="text-[#22d3ee] flex items-center gap-0">
            <span>{currentCmd}</span>
            <span className="cursor-blink inline-block w-2 h-4 bg-[#22d3ee] ml-0.5" />
          </div>
        )}

        {/* Final blinking prompt */}
        {phase === "done" && (
          <div className="text-[#22d3ee] flex items-center">
            <span>$ </span>
            <span className="cursor-blink inline-block w-2 h-4 bg-[#22d3ee] ml-0.5" />
          </div>
        )}
      </div>
    </div>
  );
}
