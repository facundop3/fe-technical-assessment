/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#ADABFF",
        "text-main": "#09090B",
        "aside-icon": "#808593",
        "aside-text": "#565656",
        "placeholder-search": "#828282",
        "icon-button-bg": "#09090B0A",
        "text-table": "#868686",
      },
      boxShadow: {
        "shadow-xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [],
};
