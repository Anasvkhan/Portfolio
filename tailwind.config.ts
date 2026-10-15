import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0f17",
        surface: "#11161f",
        // Single accent — every highlight, link and status uses this
        accent: {
          DEFAULT: "#7ee2b8",
          strong: "#a6efcf",
          deep: "#4fbf91",
        },
      },
      fontFamily: {
        mono: ["Geist Mono", "ui-monospace", "monospace"],
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
