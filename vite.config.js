import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-pv/', // A base para os arquivos no GitHub Pages
  plugins: [react()],
});
