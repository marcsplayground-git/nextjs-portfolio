import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#4F46E5" }, // indigo-600
        accent: { DEFAULT: "#0EA5E9" },  // sky-500
      },
      borderRadius: {
        xl: "24px",
        "2xl": "32px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.08)",
      }
    },
  },
  plugins: [],
};
export default config;
