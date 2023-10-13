/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "left-image": "url(../assets/form-image.jpg);"
      },
      fontFamily:{
        "poppins": "'Poppins', sans-serif"
      } 
    },
  },
  plugins: [],
}

