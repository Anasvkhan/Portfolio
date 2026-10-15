"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills, radarStats } from "@/data/portfolio";

const CATEGORY_COLORS: Record<string, string> = {
  Backend: "#7ee2b8",
  Databases: "#5fb895",
  Cloud: "#94a3b8",
  Frontend: "#64748b",
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
          stroke="#7ee2b8"
          strokeOpacity={0.06 + i * 0.04}
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
            stroke="#7ee2b8"
            strokeOpacity={0.1}
            strokeWidth={1}
          />
        );
      })}

      {/* Data polygon */}
      <polygon
        points={dataPath}
        fill="#7ee2b8"
        fillOpacity={0.12}
        stroke="#7ee2b8"
        strokeWidth={1.5}
      />

      {/* Data dots */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3} fill="#7ee2b8" />
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
            fill="#94a3b8"
            fontSize="11"
            fontWeight="500"
            fontFamily="Geist Mono, ui-monospace, monospace"
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
        <span className="font-mono text-xs text-slate-500 tabular-nums">{level}%</span>
      </div>
      <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
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
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between gap-6 border-b border-white/[0.06] pb-6">
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-[-0.03em]">Skills</h2>
          <span className="font-mono text-xs text-slate-500 pb-1.5">01 / expertise</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Radar */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full px-8 sm:px-14 py-4" style={{ overflow: "visible" }}>
              <RadarChart stats={radarStats} />
            </div>
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {radarStats.map((s) => (
                <div
                  key={s.axis}
                  className="surface text-center border border-white/[0.06] rounded-lg py-2.5 px-1"
                >
                  <div className="text-white text-lg font-semibold tabular-nums">{s.value}</div>
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
