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
      '5xl': '1800px'
    }
  },
  plugins: [],
}
