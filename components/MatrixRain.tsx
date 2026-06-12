"use client";

import { useEffect, useRef } from "react";

const CHARS =
  "01{}[];=>const let async await function return import export class type interface prisma SELECT INSERT WHERE POST GET JWT RBAC API".split(
    " "
  );

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 13;
    const colW = fontSize * 2.5;
    let columns = Math.floor(canvas.width / colW);
    const drops: number[] = Array(columns).fill(Math.random() * -40);

    let animFrame: number;

    function draw() {
      ctx!.fillStyle = "rgba(10, 14, 26, 0.06)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      columns = Math.floor(canvas!.width / colW);
      while (drops.length < columns) drops.push(Math.random() * -40);

      for (let i = 0; i < columns; i++) {
        const word = CHARS[Math.floor(Math.random() * CHARS.length)];
        const opacity = Math.random() * 0.5 + 0.2;
        ctx!.fillStyle = `rgba(124, 58, 237, ${opacity})`;
        ctx!.font = `${fontSize}px "JetBrains Mono", monospace`;
        ctx!.fillText(word, i * colW, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i] += 0.4;
      }

      animFrame = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.35 }}
      aria-hidden="true"
    />
  );
}
