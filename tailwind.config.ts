import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#8A33FD",
        },
        light: {
          900: "#FFFFFF",
          850: "#F6F6F6",
          800: "#EDEEF2",
          700: "#BEBCBD",
          500: "#807D7E",
          400: "#3C4242",
        },
      },

      boxShadow: {
        "light-100": "0px 3px 4px 0px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        causten: "Causten",
        coresans: "Coresans",
      },
    },
  },
  plugins: [],
};
export default config;
