# ⚖️ DYN Estudio Jurídico

**DYN Estudio Jurídico** es una aplicación web moderna diseñada para la gestión, administración y presencia digital de un estudio de abogados. Está construida bajo una arquitectura de alto rendimiento, tipado estricto y despliegue rápido en la nube.

🌐 **Sitio Web Oficial:** [dyn-estudio-juridico.vercel.app](https://vercel.app)

---

# 🛠️ Stack Tecnológico

El proyecto destaca por utilizar herramientas de última generación en el ecosistema de JavaScript/TypeScript, optimizando tanto el desarrollo (DX) como la velocidad en producción.

### Frontend & UI
- **React.js & TypeScript**: Arquitectura basada en componentes reactivos con tipado estricto.
- **Vite.js**: Entorno de desarrollo ultrarrápido y empaquetador basado en ESM nativo.
- **Tailwind CSS**: Framework de estilos enfocado en utilidades para diseño ágil.
- **shadcn/ui**: Componentes primitivos, accesibles y personalizables de interfaz.

### Entorno de Ejecución & Dependencias
- **Bun**: Motor en tiempo de ejecución de alta velocidad y gestor de dependencias principal.
- **Node.js & NPM**: Soporte de compatibilidad estándar para la resolución de módulos.

### Calidad de Código
- **ESLint**: Análisis estático del código para asegurar buenas prácticas y consistencia.
- **Prettier**: Formateador de sintaxis automatizado.

### Infraestructura & Cloud
- **Cloudflare Workers (`wrangler`)**: Computación Serverless en el Edge para optimizar redirecciones y lógica perimetral.
- **Vercel Edge Platform**: Hosting de alto rendimiento con despliegue continuo (CI/CD).

---

# ⚙️ Requisitos Previos

Asegúrate de tener instalado **Bun** en tu máquina local:

```bash
# Instalar Bun (macOS/Linux/WSL)
curl -fsSL https://bun.sh | bash
```

---

# 🚀 Instalación y Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com
   cd dyn-estudio-juridico
   ```

2. **Instalar dependencias:**
   ```bash
   bun install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   bun run dev
   ```

4. **Compilar para producción:**
   ```bash
   bun run build
   ```

---

# 📁 Estructura del Proyecto

```bash
├── public/              # Archivos estáticos (imágenes, favicons, etc.)
├── src/                 # Código fuente principal de la aplicación
├── .gitignore           # Archivos y carpetas excluidos de Git
├── .prettierrc          # Reglas de formato de código
├── components.json      # Configuración de la librería de componentes (shadcn)
├── eslint.config.js     # Configuración del linter ESLint
├── index.html           # Punto de entrada HTML
├── tsconfig.json        # Configuración del compilador de TypeScript
├── vercel.json          # Configuración de rutas y despliegue en Vercel
├── vite.config.ts       # Configuración del empaquetador Vite
└── wrangler.jsonc       # Configuración para entornos Cloudflare Workers/Pages
```
