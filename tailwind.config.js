const { colors, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: {
      "intro-mobile": "url('/bg-into-mobile.svg')",
      "desktop-desktop": "url('/bg-intro-desktop.svg')",
    },
    colors: {
      ...colors,
      primary: {
        dark_blue: "hsl(233, 26%, 24%)",
        lime_green: "hsl(136, 65%, 51%)",
        bright_cyan: "hsl(192, 70%, 51%)",
      },

      neutral: {
        grayish_blue: "hsl(233, 8%, 62%)",
        light_grayish_blue: "hsl(257, 7%, 63%)",
        v_light_gray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      ...fontFamily,
      public_sans: ["Public Sans", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
