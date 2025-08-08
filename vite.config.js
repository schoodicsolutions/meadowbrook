import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      include: "**/*.{js,ts,jsx,tsx}",
    }),
  ],
  server: {
    historyApiFallback: true, // 👈 fixes local refresh/new tab
  },
});
