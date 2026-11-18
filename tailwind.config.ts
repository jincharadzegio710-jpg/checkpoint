import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        gold: "#E8A317",
        amber: "#B8741A",
        cream: "#FFF8E7",
        brown: "#2B1B0E",
        accent: "#F5C84C",
      },
      fontFamily: {
        sans: ["Noto Sans Georgian", "sans-serif"],
      },
    },
  },
};

export default config;
