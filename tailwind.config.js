/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        bg: "hsl(233,100%,98%)",
        primary: "hsl(249,37%,44%)",
        primary_var: "hsl(250,27%,82%)",
        accent: "hsl(12,93%,70%)",
        info: "hsl(240,9%,75%)",
        infoDark: "hsl(250,12%,41%)",
      },
      aspectRatio: {
        "4/2": "4 / 2",
      },
    },
  },
  plugins: [],
};
