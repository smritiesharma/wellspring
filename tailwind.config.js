/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#0A2E2F',
          900: '#0F3D3E',
          800: '#154F4E',
        },
        forest: {
          700: '#1B5E4A',
          600: '#276E57',
        },
        gold: {
          400: '#E0B968',
          500: '#D4A24C',
          600: '#B8862F',
        },
        sand: {
          50: '#FAF7F0',
          100: '#F2ECDD',
          200: '#E8DFC8',
        },
        ink: {
          900: '#1F2521',
          700: '#3A4440',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'ripple': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Cpath d='M0 20 Q 15 5, 30 20 T 60 20 T 90 20 T 120 20' fill='none' stroke='%23D4A24C' stroke-width='2' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.9)', opacity: 0.6 },
          '100%': { transform: 'scale(1.6)', opacity: 0 },
        },
      },
      animation: {
        rise: 'rise 0.7s ease-out both',
        ripple: 'ripple 2.5s ease-out infinite',
      },
    },
  },
  plugins: [],
}
