/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "​#006400",
        secondary: "#F8F8F8",
        tertiary:"#5AB27D",
        "light-blue": "#95C4CB",
        "orange": "#rgb(255,122,52)",
        "dark-blue": "#010101",
        "light-yellow": "#CACB96",
      },
      container: {
        padding: {
          DEFAULT: "15px",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};

