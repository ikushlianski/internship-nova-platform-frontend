import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
    },
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
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
        hover: {
          DEFAULT: "hsl(var(--hover))",
        },
        disabled: {
          DEFAULT: "hsl(var(--disabled))",
        },
        stroke: {
          DEFAULT: "hsl(var(205, 100%, 49%))",
        },
        white: {
          foreground: "hsl(var(--white-foreground))",
        },
        tertiaru: {
          foreground: "hsl(var(--tertiaru-foreground))",
        },
        negative: {
          foreground: "hsl(var(--negative-foreground))",
        },
        blue: {
          50: "hsl(var(--blue50))",
          100: "hsl(var(--blue100))",
          200: "hsl(var(--blue200))",
          300: "hsl(var(--blue300))",
          400: "hsl(var(--blue400))",
          500: "hsl(var(--blue500))",
          600: "hsl(var(--blue600))",
          700: "hsl(var(--blue700))",
          800: "hsl(var(--blue800))",
          900: "hsl(var(--blue900))",
          950: "hsl(var(--blue950))",
        },
        font: {
          normal:  "--font-weight-normal",
          medium:  "--font-weight-medium",
          semibold:  "--font-weight-semibold",
          bold:  "--font-weight-bold"
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config