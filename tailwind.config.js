/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserratRegular: ["Montserrat Regular", "sans-serif"],
        robotoMonoSemiBold: ["Roboto Mono SemiBold", "monospace"],
        montserratBold: ["Montserrat Bold", "sans-serif"]
      }
    },
  },
  plugins: [],
}
