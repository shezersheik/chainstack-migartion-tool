import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  build: {
    rollupOptions: {
      input: {
        popup: 'index.html',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
    outDir: 'dist',
  },
});
