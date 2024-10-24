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
        SecondaryColor: "#1F3F44",
        AccentColor: "#E4DDD8",
        AltColor: "#2F4849"
      },
    },
  },
  plugins: [],
}

