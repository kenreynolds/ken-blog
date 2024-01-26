/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        ken: {
          primary: "#08c2ff",
          secondary: "#ffb400",
          accent: "#ff2800",
          neutral: "#2a2a2a",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
