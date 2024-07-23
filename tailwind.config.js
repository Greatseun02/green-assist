/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage:{
      //   "hero-image": ""
      // },
      padding:{
        sm:"20px",
        md: "30px",
        lg: "70px",
        xl: "120px"
      }
    },
  },
  plugins: [],
}