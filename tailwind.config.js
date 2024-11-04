/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#dee8f2',
      'orange': '#f57017',
      'blueblack': '#212457',
      'white': '#ffffff',
      'cyan': '#00FFFF',
      'black': '#000000',
      'grey': '#f2f2f2',
      'grey-2': '#bababa',
    },
    extend: {
      minWidth: {
        'xl': '38rem',
        '6': '10rem',
      },
    },
  },
  plugins: [],
}