/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        ink: "#0b0b16",
        panel: "#121225",
        electric: "#55b8ff",
        violet: "#8b5cf6",
      },
      boxShadow: {
        glow: "0 0 55px rgba(85,184,255,.18)",
      },
    },
  },
  plugins: [],
};
