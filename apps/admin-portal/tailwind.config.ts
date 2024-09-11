import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx,mdx}"
  ],
  theme: {},
  plugins: [],
};
export default config;
