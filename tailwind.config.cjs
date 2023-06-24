/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif'],
      },
      colors: {
        white: '#E5E7E6',
        black: '#141301',
        accent: '#9A48D0',
      },
    },
  },
  plugins: [],
};
