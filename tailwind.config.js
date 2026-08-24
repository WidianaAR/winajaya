/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#960b0b',
          50: '#fef2f2',
          100: '#fde4e4',
          200: '#fbcece',
          300: '#f7acac',
          400: '#f07b7b',
          500: '#e54d4d',
          600: '#d33333',
          700: '#b22424',
          800: '#960b0b',
          900: '#7c1c1c',
          950: '#430909',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
