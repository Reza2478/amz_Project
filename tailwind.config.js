/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#7B2869',
        'main':'#C85C8E',
        'second':'#FFBABA',
        'third':'#9D3C72'
      },
    },
  },
  plugins: [],
}