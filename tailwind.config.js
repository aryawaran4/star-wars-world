/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        twinkle: 'twinkle 2s infinite ease-in-out',
        twinkle2: 'twinkle 3s infinite ease-in-out',
        twinkle3: 'twinkle 4s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
