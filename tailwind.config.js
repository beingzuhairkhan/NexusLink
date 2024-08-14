/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'edu-vic': ['"Edu VIC WA NT Beginner"', 'sans-serif'],
        'dancing-script': ['"Dancing Script"', 'cursive'],
      },
      
    },
  },
  plugins: [],
}