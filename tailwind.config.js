/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17231e",
        paper: "#f7f8f4",
        lime: "#c5f467",
        muted: "#6d7771",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 35, 30, 0.08)",
      },
    },
  },
  plugins: [],
};
