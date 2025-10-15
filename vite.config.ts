import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Determine base path depending on mode
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Ajinkyasingh_Portfolio/" : "/", 
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


