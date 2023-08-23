import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'scarlet': '#F10D0C'
      },
      fontFamily: {
        'body': ['raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
