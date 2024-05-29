/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7e22ce',
          light: '#9f42df',
          dark: '#5e0d9a',
        },
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
}
