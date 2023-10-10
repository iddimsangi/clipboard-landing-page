module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "375px",
      sm: "550px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        header_desktop: "url('./images/bg-header-desktop.png')",
        header_mobile: "url('./images/bg-header-mobile.png')",
      },
      colors: {
        "strong-cyan": "hsl(171, 66%, 44%)",
        "light-blue": "hsl(233, 100%, 69%)",
        "dark-grayish-blue": "hsl(210, 10%, 33%)",
        "grayish-blue": "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans"],
      },
    },
  },
  plugins: [],
};
