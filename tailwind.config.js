/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-800)",
          secondary: "var(--brand-700)",
          accent: "var(--brand-500)",
          ink: "var(--ink)",
        },
        surface: {
          app: "var(--canvas)",
          card: "var(--surface)",
          soft: "#F7F9FB",
        },
        line: {
          subtle: "var(--line)",
        },
      },
      fontFamily: {
        header: ["Manrope", "sans-serif"],
        body: ["Roboto Flex", "sans-serif"],
      },
      width: {
        "sidebar-collapsed": "88px",
        "sidebar-expanded": "240px",
      },
      maxWidth: {
        "logo-sidebar": "120px",
      },
      backgroundImage: {
        "sidebar-gradient": "linear-gradient(180deg, #13335A 0%, #245F9D 100%)",
      },
      borderRadius: {
        panel: "14px",
      },
      boxShadow: {
        panel: "0 2px 5px rgba(18, 38, 63, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
