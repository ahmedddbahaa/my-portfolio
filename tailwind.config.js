/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        noir: '#0a0a0a',
        'noir-light': '#111111',
        'noir-mid': '#1a1a1a',
        carbon: '#222222',
        'carbon-light': '#2e2e2e',
        ash: '#888888',
        silver: '#cccccc',
        cream: '#f5f0e8',
        gold: '#c9a96e',
        'gold-light': '#e8c88a',
        accent: '#c9a96e',
      },
      letterSpacing: {
        'ultra': '0.25em',
        'wide-xl': '0.15em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
