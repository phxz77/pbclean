import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A1A3A",
          red: "#E31E24",
          blue: "#0D6EFD",
          "blue-light": "#35B5FF",
          teal: "#4FD1C5",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        surface: "#F4F8FC",
        dark: "#0F172A",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["64px", { lineHeight: "1.1", fontWeight: "700" }],
        h1: ["52px", { lineHeight: "1.15", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["18px", { lineHeight: "1.7", fontWeight: "400" }],
        small: ["15px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["13px", { lineHeight: "1.5" }],
      },
      borderRadius: {
        sm: "12px",
        md: "20px",
        lg: "32px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15,23,42,0.08)",
        medium: "0 25px 50px rgba(15,23,42,0.12)",
        glass: "0 8px 40px rgba(255,255,255,0.12)",
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        section: "120px",
      },
      backdropBlur: {
        glass: "18px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
