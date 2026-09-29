import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    base: '/',
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          recruitersys: path.resolve(__dirname, 'recruitersys.html'),
          diarioEdb: path.resolve(__dirname, 'diario-edb.html'),
          petplant: path.resolve(__dirname, 'petplant.html'),
          ventihome: path.resolve(__dirname, 'ventihome.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
