/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima': ['Proxima Nova', 'sans-serif'],
      },
      colors: {
        'blue-sky': '#E9F4FF',
        'charcoal-gray': '#1A2630',
        'electric-blue': '#4361EE',
        'pale-lilac': '#F4F6FE',
        'dark-blue': '#03071B',
        'text-gray': '#4F5863',
      },
    },
  },
  plugins: [],
}

