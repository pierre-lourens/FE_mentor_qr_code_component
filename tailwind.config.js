/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#d6e2f0',
        'grayish-blue': '#7b879d',
        'dark-blue': '#1f3251',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        base: ['15px'],
        heading: ['20px'],
      },
    },
  },
  plugins: [],
};
