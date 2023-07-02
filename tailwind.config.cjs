/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        white: '#E5E7E6',
        black: '#141301',
        accent: 'var(--accent-color)',
        'accent-50': 'var(--accent-color-50)',
        'accent-40': 'var(--accent-color-40)',
        'accent-30': 'var(--accent-color-30)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
