import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`, // Optional: If you want to globally import variables, mixins, etc.
      },
    },
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
});
