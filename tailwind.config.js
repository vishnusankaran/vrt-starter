/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6A2E35',
        'secondary': '#646E68',
        'type-primary': '#020122',
        'type-secondary': '#646E68',
        'success': '#90E39A',
        'failure': '#E3655B',
      },
    },
  },
  plugins: [],
}

