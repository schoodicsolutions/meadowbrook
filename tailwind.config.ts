import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'scarlet': '#F10D0C'
      },
      fontFamily: {
        'body': ['Raleway', 'sans-serif'],
        'headings': ['"Source Sans 3"', 'sans-serif'],
      },
      screens: {
        'xs': '520px',
        'sm': '720px',
      },
    },
  },
  plugins: [],
} satisfies Config;
