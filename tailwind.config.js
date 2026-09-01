/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        coral: "#E94D35",
        "coral-light": "#E94D351A",
        ink: "#121212",
        "ink-soft": "#6B7280",
        "ink-faint": "#9CA3AF",
        canvas: "#FFFFFF",
        "canvas-deep": "#FAFAFA",
        "canvas-tint": "#FFF8F6",
        rule: "#E5E7EB",
      },
      fontFamily: {
        display: ["Outfit", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
    },
  },
  plugins: [],
};
