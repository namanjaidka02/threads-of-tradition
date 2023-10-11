module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "270px",
      xs: "320px",
      sm: "450px",
      md: "748px",
      lg: "1250px",
      xl: "1440px",
    },
    extend: {
      backgroundColor: {
        "pink-gradient": "#faebd79e",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif", "cursive"],
        caveat: ["Caveat", "sanas-serif", "cursive"],
      },
    },
  },
  plugins: [],
};
