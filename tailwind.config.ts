import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0f',
        ink2: '#111122',
        mid: '#888896',
        rule: 'rgba(10,10,15,0.07)',
        blue: '#0057ff',
        blue2: '#4d8aff',
        cream: '#f9f8f6',
        'cyan-brand':   '#3DEEDB',
        'blue-brand':   '#3DC9F0',
        'purple-brand': '#6E5DDD',
      },
    },
  },
  plugins: [],
}
export default config
