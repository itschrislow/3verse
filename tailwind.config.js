module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#77bb3f",
      },
      backgroundImage: {
        "forest-map": "url('/static/map.png')",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        25: "repeat(25, minmax(0, 1fr))",
        28: "repeat(28, minmax(0, 1fr))",
        30: "repeat(30, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
