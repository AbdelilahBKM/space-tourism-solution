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
      'home-lg': 'url("/assets/home/background-home-desktop.jpg")',
      'destination-sm': 'url("/assets/destination/background-destination-mobile.jpg")',
      'destination-md': 'url("/assets/destination/background-destination-tablet.jpg")',
      'destination-lg': 'url("/assets/destination/background-destination-desktop.jpg")',
      'crew-sm': 'url("/assets/crew/background-crew-mobile.jpg")',
      'crew-md': 'url("/assets/crew/background-crew-tablet.jpg")',
      'crew-lg': 'url("/assets/crew/background-crew-desktop.jpg")',
      'technology-sm': 'url("/assets/technology/background-technology-mobile.jpg")',
      'technology-md': 'url("/assets/technology/background-technology-tablet.jpg")',
      'technology-lg': 'url("/assets/technology/background-technology-desktop.jpg")',
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
