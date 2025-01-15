/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#5FFF02',
        'secondary':'#153BD4'
      }
    },
  },
  plugins: [],
}