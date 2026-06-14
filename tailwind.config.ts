import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        "secondary-text": "#A1A1AA",
        accent: "#3B82F6",
        card: "#111111",
        border: "#27272A",
        muted: "#18181B",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "0.95" }],
        "display-xl": ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "1" }],
        "display-lg": ["clamp(2rem, 4vw, 4rem)", { lineHeight: "1.05" }],
        "display-md": ["clamp(1.5rem, 3vw, 3rem)", { lineHeight: "1.1" }],
        "display-sm": ["clamp(1.25rem, 2vw, 2rem)", { lineHeight: "1.2" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;