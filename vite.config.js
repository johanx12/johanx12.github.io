import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Sitio de usuario (johanx12.github.io) => se sirve desde la raíz del dominio.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: false,
  },
});
