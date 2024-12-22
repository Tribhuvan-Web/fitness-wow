/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "5p": "13%",
        "7p": "7%",
      },
      width: {
        "5p": "13%",
        "7p": "7%",
      },
    },
  },
  plugins: [],
};
