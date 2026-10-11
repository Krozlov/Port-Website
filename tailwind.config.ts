import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0c10',
        panel: '#10131a',
        elevated: '#161a23',
        border: '#232838',
        text: '#c7cbd6',
        dim: '#5b6270',
        bright: '#eef0f4',
        violet: '#8b7cf6',
        green: '#5fd39b',
        red: '#f1706f',
        amber: '#f5b955',
        blue: '#6fb3f2',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
