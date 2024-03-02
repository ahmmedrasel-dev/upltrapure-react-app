/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#26439B",
        secondary: "#0599D4",
        warning: "#F79420",
        pure: "#ffffff",
        gray: "#E2E8F6",
        black: "#161616",
      },
    },
  },
  plugins: [require("daisyui")],
};
