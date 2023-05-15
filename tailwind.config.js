/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'IBMPlex': ['IBM Plex Sans', 'sans-serif'],
        'Manrope': ['Manrope', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
