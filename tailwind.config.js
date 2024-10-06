/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'twinkle-1': 'twinkle1 5s infinite',
        'twinkle-2': 'twinkle2 7s infinite',
        'twinkle-3': 'twinkle3 6s infinite',
        'twinkle-4': 'twinkle4 8s infinite',
        'twinkle-5': 'twinkle5 9s infinite',
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
        'fade-up': 'fade-up 1s ease-out forwards',
      },
      keyframes: {
        twinkle1: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.5)', opacity: '0.5' },
        },
        twinkle2: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '20%': { transform: 'scale(0.5)', opacity: '0.5' },
        },
        twinkle3: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '30%': { transform: 'scale(0.3)', opacity: '0.3' },
        },
        twinkle4: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '40%': { transform: 'scale(0.4)', opacity: '0.4' },
        },
        twinkle5: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '60%': { transform: 'scale(0.7)', opacity: '0.7' },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}
