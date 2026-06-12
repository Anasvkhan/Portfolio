"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills, radarStats } from "@/data/portfolio";

const CATEGORY_COLORS: Record<string, string> = {
  Backend: "#7c3aed",
  Databases: "#22d3ee",
  Cloud: "#f59e0b",
  Frontend: "#10b981",
};

function RadarChart({ stats }: { stats: typeof radarStats }) {
  const size = 260;
  const cx = size / 2;
  const cy = size / 2;
  const r = 95;
  const levels = 4;
  const n = stats.length;

  const angleStep = (2 * Math.PI) / n;

  function getPoint(idx: number, radius: number) {
    const angle = idx * angleStep - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  }

  const gridPolygons = Array.from({ length: levels }, (_, i) => {
    const levelR = (r * (i + 1)) / levels;
    const pts = stats.map((_, idx) => {
      const p = getPoint(idx, levelR);
      return `${p.x},${p.y}`;
    });
    return pts.join(" ");
  });

  const dataPoints = stats.map((s, idx) => {
    const val = (s.value / 100) * r;
    return getPoint(idx, val);
  });
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-[280px] mx-auto"
      style={{ overflow: "visible" }}
      role="img"
      aria-label="Skills radar chart"
    >
      {/* Grid */}
      {gridPolygons.map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          fill="none"
          stroke="#7c3aed"
          strokeOpacity={0.15 + i * 0.07}
          strokeWidth={1}
        />
      ))}

      {/* Axis lines */}
      {stats.map((_, idx) => {
        const p = getPoint(idx, r);
        return (
          <line
            key={idx}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="#7c3aed"
            strokeOpacity={0.2}
            strokeWidth={1}
          />
        );
      })}

      {/* Data polygon */}
      <polygon
        points={dataPath}
        fill="#7c3aed"
        fillOpacity={0.15}
        stroke="#7c3aed"
        strokeWidth={2}
      />

      {/* Data dots */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={4} fill="#7c3aed" />
      ))}

      {/* Labels */}
      {stats.map((s, idx) => {
        const p = getPoint(idx, r + 28);
        const isLeft = p.x < cx - 10;
        const isRight = p.x > cx + 10;
        return (
          <text
            key={idx}
            x={p.x}
            y={p.y}
            textAnchor={isLeft ? "end" : isRight ? "start" : "middle"}
            dominantBaseline="middle"
            fill="#e2e8f0"
            fontSize="12"
            fontWeight="500"
            fontFamily="JetBrains Mono, monospace"
          >
            {s.axis}
          </text>
        );
      })}
    </svg>
  );
}

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

const CATEGORIES = ["Backend", "Databases", "Cloud", "Frontend"] as const;

export default function Skills() {
  const grouped = CATEGORIES.reduce<Record<string, typeof skills>>((acc, cat) => {
    acc[cat] = skills.filter((s) => s.category === cat);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-sm text-[#7c3aed]">// expertise</span>
          <h2 className="text-3xl font-bold text-white mt-2">Skills</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Radar */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full px-14 py-4" style={{ overflow: "visible" }}>
              <RadarChart stats={radarStats} />
            </div>
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {radarStats.map((s) => (
                <div
                  key={s.axis}
                  className="text-center bg-[#0d1224] border border-white/5 rounded-lg py-2 px-1"
                >
                  <div className="text-white text-lg font-bold">{s.value}</div>
                  <div className="font-mono text-[10px] text-slate-500">{s.axis}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bars by category */}
          <div className="flex flex-col gap-8">
            {CATEGORIES.map((cat) => (
              <div key={cat}>
                <h3
                  className="font-mono text-xs uppercase tracking-widest mb-4"
                  style={{ color: CATEGORY_COLORS[cat] }}
                >
                  {cat}{cat === "Backend" ? " (primary)" : cat === "Frontend" ? " (secondary)" : ""}
                </h3>
                <div className="flex flex-col gap-3">
                  {grouped[cat].map((s) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      color={CATEGORY_COLORS[cat]}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
