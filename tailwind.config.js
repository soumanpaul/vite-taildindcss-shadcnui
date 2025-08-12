/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1A73E8', // fintech blue
          dark: '#174EA6',
        },
      },
    },
  },
  plugins: [],
};
