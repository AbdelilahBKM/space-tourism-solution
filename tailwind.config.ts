import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
      'home-sm': 'url("/assets/home/background-home-mobile.jpg")',
      'home-md': 'url("/assets/home/background-home-tablet.jpg")',
      'home-lg': 'url("/assets/home/background-home-desktop.jpg")'
      },
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed'],
        'bellefair': ['Bellefair', 'serif']
      },
      colors: {
        primary: '#FFF',
        secondary: '#D0D6F9'
      },
      fontSize: {
        'paragraph': '18'
      }
    },
  },
  plugins: [],
}
export default config
