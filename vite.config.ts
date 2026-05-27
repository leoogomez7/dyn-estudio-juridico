import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // 1. Soporte de alias de TypeScript
    tsconfigPaths(),
    // 2. Compilador de estilos Tailwind v4
    tailwindcss(),
    // 3. El compilador de React estándar debe ir al final
    react(),
  ],
});
