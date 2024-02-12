import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gray-pfp": "#939393",
        stammer: "#e69085",
        weather: "#77a9bf",
        seoul: "#bf796b",
        enlight: "#8a837a",
        animal: "#9e926c",
      },
      fontFamily: {
        sunbatang: ["var(--font-sunbatang)", "serif"],
        pyeongchang: ["var(--font-pyeongchang)", "sans-serif"],
      },
      transitionProperty: {
        appear: "opacity translate",
      },
      spacing: {
        "13": "3.25rem",
        "19": "4.75rem",
      },
      boxShadow: {
        down: "0 15px 20px 0px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
