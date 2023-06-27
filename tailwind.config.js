/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      fontWeight: {
        bold: "bold",
        "bold-italic": "bold italic",
        "extra-bold": 800,
        "extra-bold-italic": "800 italic",
        "extra-light": 200,
        "extra-light-italic": "200 italic",
        light: 300,
        "light-italic": "300 italic",
        medium: 500,
        "medium-italic": "500 italic",
        regular: "normal",
        "semi-bold": 600,
        "semi-bold-italic": "600 italic",
      },
      colors: {
        bgWhite: "#ffffff",
        bglBlue: "#f0f8ff",
        txtBlack: "#121212",
        txtBlue: "#0083ff",
        txtGray: "#93a5b8",


      },
    },
  },
  plugins: [],
};
