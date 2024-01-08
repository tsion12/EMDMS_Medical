/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#0873BB",
        Second: "#9898A3",
        Emdms: "#005656",
        new: "#008894",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        base: "sm",
      },
    },
  },
  plugins: [],
};
