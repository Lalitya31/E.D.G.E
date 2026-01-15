/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark backgrounds (initial sections)
        'dark-primary': '#0E0F13',
        'dark-secondary': '#16181D',
        'charcoal': '#2A2D34',
        'fog': '#3E4148',
        
        // Flame / Core accent (warm)
        'flame': {
          light: '#F6B26B',
          DEFAULT: '#E69138',
          dark: '#B45F06'
        },
        
        // Clarity backgrounds (final sections)
        'clarity': {
          DEFAULT: '#F4F1EC',
          bright: '#FAF8F4'
        },
        
        // Text colors
        'text-primary': '#F4F1EC',
        'text-muted': '#9CA3AF'
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'hero': ['96px', { lineHeight: '1.1', letterSpacing: '0.04em' }],
        'section': ['48px', { lineHeight: '1.2' }],
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" /%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.05\"/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
