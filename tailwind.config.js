/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx,astro}'],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#0f1117',
          panel: '#171923',
          surface: '#1f2937',
          card: '#242837',
          text: '#f8fafc',
          muted: '#9ca3af',
          accent: '#22c55e',
          accentStrong: '#16a34a',
          line: 'rgba(148, 163, 184, 0.18)',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        soft: '0 16px 40px rgba(2, 6, 23, 0.35)',
        panel: '0 24px 70px rgba(2, 6, 23, 0.55)',
        glow: '0 0 0 1px rgba(34, 197, 94, 0.18), 0 20px 60px rgba(2, 6, 23, 0.5)',
      },
      backgroundImage: {
        'grid-dark': 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
