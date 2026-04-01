import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "true-black": "#1C1C1C",
        ivory: "#F7F0E8",
        charcoal: "#3D3D3D",
        rust: "#C1440E",
        amber: "#E8AA42",
        "card-dark": "#2A2A2A",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
      spacing: {
        "4": "4px",
        "8": "8px",
        "12": "12px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
        "64": "64px",
        "96": "96px",
        "128": "128px",
      },
    },
  },
  plugins: [],
};

export default config;
