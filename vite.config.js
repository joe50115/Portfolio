import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Default Vite config (matches the scaffold from `npm create vite@latest`).
export default defineConfig({
  plugins: [react()],
});
