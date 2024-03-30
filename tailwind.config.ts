import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-tc)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-noto-serif-tc)", ...defaultTheme.fontFamily.serif],
        mono: ["var(--font-noto-sans-mono)", ...defaultTheme.fontFamily.mono],
      },
      container: {
        center: true,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#916019",
          "primary-content": "#AC8A46",
          secondary: "#23AFC6",
          "secondary-content": "#916000",
          gray: "#8D8D8D",
          black: "#000000",
          white: "#FFFFFF",
        },
      },
      {
        dark: {
          primary: "#916019",
          "primary-content": "#AC8A46",
          secondary: "#23AFC6",
          "secondary-content": "#916000",
          gray: "#8D8D8D",
          black: "#000000",
          white: "#FFFFFF",
        },
      },
    ],
    darkTheme: "dark",
  },
};
export default config;
