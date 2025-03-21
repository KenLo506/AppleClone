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
        'apple-gray': '#1d1d1f',
        'apple-blue': '#2997ff',
        'apple-red': '#c31618',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      fontSize: {
        'apple-nav': ['12px', '1'],
      },
      height: {
        'hero': '580px',
        'promo': '580px',
      },
    },
  },
  plugins: [],
} 