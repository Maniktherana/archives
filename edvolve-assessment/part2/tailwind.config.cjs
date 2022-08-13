module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}", "./src/*.{ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "repeat(auto-fit,minmax(400px,1fr))",
      },
    },
  },
  plugins: [],
};
