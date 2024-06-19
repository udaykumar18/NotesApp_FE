/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // Colors used in Project
      colors: {
        primary: "#2b85ff",
        secondary: "#ef863e",
      },
    },
  },
  plugins: [],
};
