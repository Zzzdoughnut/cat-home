import { defineConfig, presetIcons, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
  ],
  theme: {
    colors: {
      brand: {
        primary: '#fb923c', // Orange 400 (Warm Cat vibes)
        secondary: '#f472b6', // Pink 400
        accent: '#fde047', // Yellow 300
        dark: '#1c1917', // Stone 900 (Warm Dark)
        light: '#fff7ed', // Orange 50
      }
    },
    fontFamily: {
      sans: '"Outfit", "Inter", system-ui, sans-serif',
      display: '"Quicksand", sans-serif',
    },
    animation: {
      keyframes: {
        'blob': '{0%,100%{transform:translate(0px,0px) scale(1)} 33%{transform:translate(30px,-50px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(0.9)}}',
        'float': '{0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)}}'
      },
      durations: {
        'blob': '7s',
        'float': '3s'
      },
      counts: {
        'blob': 'infinite',
        'float': 'infinite'
      }
    }
  },
  shortcuts: [
    ['flex-center', 'flex items-center justify-center'],
    ['glass-container', 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl'],
    ['glass-card', 'bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-400'],
    ['text-gradient', 'bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent'],
    ['nav-link', 'text-white/70 hover:text-brand-primary transition-colors duration-200 cursor-pointer font-medium'],
    ['cat-badge', 'px-3 py-1 bg-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-wider rounded-full border border-brand-primary/30'],
  ]
})
