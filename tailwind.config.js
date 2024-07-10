/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    fontfamily:{},
    theme: {
    extend: {
      textUnderlineOffset: {
        3: '3px',
      }
    },
  },
  plugins: [],
}

