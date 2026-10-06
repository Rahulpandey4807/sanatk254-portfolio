import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: {
      bg: "rgb(var(--bg) / <alpha-value>)", fg: "rgb(var(--fg) / <alpha-value>)", mut: "rgb(var(--mut) / <alpha-value>)",
      card: "rgb(var(--card) / <alpha-value>)", line: "rgb(var(--line) / <alpha-value>)", acc: "rgb(var(--acc) / <alpha-value>)",
    },
    fontFamily: { sans: ["var(--font-archivo)", "system-ui", "sans-serif"] },
  } },
} satisfies Config;
