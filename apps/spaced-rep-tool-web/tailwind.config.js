/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        TextColorTextPrimary: '#3F3E3E',
        TextColorTextTertiaru: '#B8B8B8',
      },
    },
  },
  plugins: [],
}
