/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0' },
        },

        blink: {
          '50%': { border: 'transparent' },
        }
      },
      colors: {
        primary: '#EF4444 ',
        primaryHover: '',
      },

      animation: {
        typing: 'typing 1.5s steps(16)',
        blink: 'blink .5s infinite step-end alternate',
      }
    },
  },
  plugins: [],
}