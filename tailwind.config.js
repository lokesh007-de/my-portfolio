/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          deep: '#080808',
          card: '#0f0f0f',
          footer: '#050505',
        },
        accent: {
          DEFAULT: '#00D4FF',
          glow: 'rgba(0, 212, 255, 0.15)',
        }
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0, 212, 255, 0.35)',
        'glow-cyan-lg': '0 0 25px rgba(0, 212, 255, 0.55)',
      },
      letterSpacing: {
        widest: '0.25em',
        mega: '0.4em',
      }
    },
  },
  plugins: [],
}
