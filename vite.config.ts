import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    // 1. Configuración de entorno local para Workers/Cloudflare Pages
    cloudflare({ 
      viteEnvironment: { name: "ssr" } 
    }),
    // 2. Soporte de alias de TypeScript
    tsconfigPaths(),
    // 3. Compilador de estilos Tailwind v4
    tailwindcss(),
    // 4. El orquestador de TanStack Start maneja la generación de rutas antes de React
    tanstackStart(),
    // 5. El compilador de React estándar debe ir al final
    react(),
  ],
});
