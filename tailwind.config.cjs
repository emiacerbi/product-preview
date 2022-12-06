/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-400': 'hsl(158, 36%, 37%)',
        'secondary-200': 'hsl(30, 38%, 92%)',
        'neutral-900': 'hsl(212, 21%, 14%)',
        'neutral-400': 'hsl(228, 12%, 48%)',
        'neutral-100': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        primary: "'Fraunces', serif",
        secondary: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
}
