/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ['coffee'],
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }), require('daisyui')],
};
