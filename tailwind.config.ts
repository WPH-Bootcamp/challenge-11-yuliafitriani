import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "0": "0px",
        "1": "1px",
        "2": "2px",
        "4": "4px",
        "8": "8px",
        "16": "16px",
        "24": "24px",
      },
      typography: {
        // Extended typography classes
        "display-2xl-bold": {
          fontSize: "4.5rem",
          fontWeight: "700",
          lineHeight: "1.1",
        },
        "lg-semibold": {
          fontSize: "1rem",
          fontWeight: "600",
          lineHeight: "1.1",
        },
      },
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
        },
        neutral: {
          25: "var(--color-neutral-25)",
          50: "var(--color-neutral-50)",
          100: "var(--color-neutral-100)",
          200: "var(--color-neutral-200)",
          300: "var(--color-neutral-300)",
          400: "var(--color-neutral-400)",
          500: "var(--color-neutral-500)",
          600: "var(--color-neutral-600)",
          700: "var(--color-neutral-700)",
          800: "var(--color-neutral-800)",
          900: "var(--color-neutral-900)",
          950: "var(--color-neutral-950)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
