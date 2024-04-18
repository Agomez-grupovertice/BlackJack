import { defineConfig } from 'vite';

export default defineConfig({
  // Configuraciones básicas aquí
  root: '.', // Directorio raíz del proyecto
  base: '/', // Base de la URL cuando se sirve en producción
  build: {
    outDir: 'dist', // Directorio de salida para producción
  }
});