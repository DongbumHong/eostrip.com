import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sakura: {
          DEFAULT: "#E91E63",
          50: "#FFF1F4",
          100: "#FFD9E1",
          200: "#FFB3C5",
          300: "#FF7FA0",
          400: "#FF4D7E",
          500: "#E91E63",
          600: "#C2185B",
          700: "#9C1349",
          800: "#761038",
          900: "#560B27",
        },
        navy: {
          DEFAULT: "#1A3A6E",
          50: "#EEF2F8",
          100: "#D1DCEC",
          200: "#A3B8D8",
          300: "#7594C4",
          400: "#476FAF",
          500: "#2E5494",
          600: "#1A3A6E",
          700: "#142C55",
          800: "#0F213F",
          900: "#0A172C",
        },
        ink: "#1F2937",
        paper: "#FFFFFF",
        mist: "#F6F7FB",
      },
      fontFamily: {
        sans: ["var(--font-mplus)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2rem, 4vw + 1rem, 3.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        hero: [
          "clamp(2.5rem, 6vw + 1rem, 5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
      },
      boxShadow: {
        card: "0 4px 16px rgba(26, 58, 110, 0.08)",
        cardHover: "0 8px 28px rgba(26, 58, 110, 0.12)",
        sakura: "0 4px 16px rgba(233, 30, 99, 0.18)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
          lg: "2rem",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-sakura":
          "linear-gradient(135deg, #FFF1F4 0%, #FFFFFF 50%, #EEF2F8 100%)",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
