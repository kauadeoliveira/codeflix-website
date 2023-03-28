/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        berkshire: ['Berkshire Swash', 'cursive']
      },
      colors: {
        'main-color': '#121212',
        'secondary-color': '#1e1e1e',
        'text-disabled': 'rgba(255, 255, 255, 0.3)',
        'bg-disabled': 'rgba(255, 255, 255, 0.12)'
      }
    },
  },
  plugins: [],
}
