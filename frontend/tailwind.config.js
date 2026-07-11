/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#1E293B",
        background: "#F8FAFC",
        surface: "#FFFFFF",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        muted: "#64748B",
        border: "#E2E8F0"
      },

      borderRadius: {
        xl2: "20px"
      },

      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,.08)"
      }
    },
  },
  plugins: [],
}