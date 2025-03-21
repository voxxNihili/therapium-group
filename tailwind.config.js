/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#27557C',
        secondary: '#2D6C9B',
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'sans-serif'],
        inter: ['var(--font-inter)'],
        crackers: ['var(--font-crackers-brusher)'],
      },
    },
  },
  plugins: [],
}; 