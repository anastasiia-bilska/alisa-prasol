import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    emptyOutDir: true,
  },
  define: {
    'process.env': process.env || {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
