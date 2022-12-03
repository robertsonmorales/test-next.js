/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    colors: {
      'primary': '#6A983C',
      'white': '#ffffff',
      'gray-100': '#F2F4F7',
      'gray-500': '#667085',
    }
  },
  plugins: [],
}