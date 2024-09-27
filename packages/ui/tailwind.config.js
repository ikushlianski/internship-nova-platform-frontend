module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
        },
        hover: {
          DEFAULT: 'hsl(var(--hover))',
        },
        disabled: {
          DEFAULT: 'hsl(var(--disabled))',
        },
        white: {
          DEFAULT: 'hsl(var(--white-foreground))',
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
        },
        negative: {
          DEFAULT: 'hsl(var(--negative))',
          foreground: 'hsl(var(--negative-foreground))',
        },
      },
    },
  },
  plugins: [],
};
