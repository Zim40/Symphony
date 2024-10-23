/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#2D403B",
        SecondaryColor: "#B114F5D",
        AccentColor: "#E4DDD8",
        AltColor: "#2F4849"
      },
    },
  },
  plugins: [],
}

