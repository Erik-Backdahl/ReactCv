import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Ensures refreshing any route returns index.html (no 404s)
    historyApiFallback: true,
  },
});
