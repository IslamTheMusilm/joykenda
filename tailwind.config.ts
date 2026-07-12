import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E4",
        paper: "#FFFDF8",
        beige: "#E7D9BF",
        gold: {
          DEFAULT: "#AD8A4E",
          light: "#C9A96A",
          dark: "#8A6A34",
        },
        charcoal: "#242019",
        ink: "#171310",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        frame: "0 18px 40px -12px rgba(23,19,16,0.28)",
        soft: "0 8px 24px -8px rgba(23,19,16,0.18)",
      },
      backgroundImage: {
        "grain": "url('/images/grain.png')",
      },
      transitionTimingFunction: {
        gallery: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
