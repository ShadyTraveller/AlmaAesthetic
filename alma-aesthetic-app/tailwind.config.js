module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a1a",
        surface: "#faf8f5",
        elevated: "#f5f1ec",
        sand: "#e8e2d9",
        line: "#e0dbd4",
        gold: { DEFAULT: "#c9a96e", dark: "#bfa67a" },
        muted: "#6b6560",
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', "Georgia", "serif"],
        sans: ['"Open Sans"', "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(26,26,26,0.07)",
      },
    },
  },
  plugins: [],
};
