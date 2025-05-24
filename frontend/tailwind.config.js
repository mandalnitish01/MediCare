/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#5f6FFF",
        "secondary": "#385399",
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(270px, 2fr))',
      },
    },
  },
  plugins: [],
}