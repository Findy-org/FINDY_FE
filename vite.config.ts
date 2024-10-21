import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
