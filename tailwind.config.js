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
          DEFAULT: '#AFF697',
          dark: '#8FD677',
          light: '#C5FFAD',
        },
        background: {
          DEFAULT: '#121212',
          card: '#1A1E1B',
          dark: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#2C372D',
          light: '#3A4A3B',
        },
      },
    },
  },
  plugins: [],
}