/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
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
        primary: '#EF4444',
        primaryHover: '#FCA5A5',
        bgPrimary: '#333',
      },

      animation: {
        typing: 'typing 2s steps(16)',
        blinking: 'blink .5s infinite step-end alternate',
      }
    },
  },
  plugins: [],
}