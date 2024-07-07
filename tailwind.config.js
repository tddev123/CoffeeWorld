/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"'] },

    extend: {
      opacity: {
        '150': 1.5,
        '200': 2 },

      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      
    },
  },
  plugins: [],
}