/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserratRegular: ["Montserrat Regular", "sans-serif"],
        robotoMonoSemiBold: ["Roboto Mono SemiBold", "monospace"],
        montserratBold: ["Montserrat Bold", "sans-serif"],
        robotoMonoBold: ["Roboto Mono Bold", "monosapce"]
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
        "51VW": "51vw",
        "31VW": "31vw",
        "29VW": "29vw"
      },
      width: {
        "51VW": "51vw",
        "31VW": "31vw",
        "29VW": "29vw"
      }
    },
    screens: {
      '2xs': '360px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '840px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1400px',
      '4xl': '1540px',
      '5xl': '1800pxx'
    },
  },
  plugins: [],
}
