import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}', '../../packages/ui/src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'color-white': '#FFFFFF',
        'color-light': '#FEFFFF',
        'color-dark': '#EBEBEB',
        'color-darker': '#D9D9D9',
        'color-primary': '#3F3E3E',
        'color-tertiary': '#B8B8B8',
      },
      fontFamily: {
        manrope: ['Manrope', 'Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        caption2: ['16px', { lineHeight: '20px' }],
        body1: ['24px', { lineHeight: '32px' }],
        body2: ['20px', { lineHeight: '32px' }],
        h3: ['40px', { lineHeight: '48px' }],
      },
    },
  },
  plugins: [],
};
export default config;
