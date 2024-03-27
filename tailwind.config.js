/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#000000",
        "custom-white": "#FFFFFF",
        "custom-gray": "#8B888C",
        "custom-blue": "#1A161F",
        "custom-brown": "#2E2938",
        "custom-second-blue": "#1C2B39",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
