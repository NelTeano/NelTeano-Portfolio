/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      colors: {
        'regal-blue': '#243c5a',
        'darkOrange': '#ffb400',
        'blackColor': 'rgba(19, 19, 19, 1)'
      },
    },
  },
  plugins: [],
}

