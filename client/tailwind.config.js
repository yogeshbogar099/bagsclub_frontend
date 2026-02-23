/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#255A5E", // Dark Green
        secondary: "#FF8C42", // Orange
        neutral: {
          100: "#F3F4F6", // Light Gray
          900: "#111827", // Dark Gray
        }
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}