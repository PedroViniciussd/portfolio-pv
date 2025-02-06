import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-pv/Portifolio/portfolio-pv/', // Caminho correto para o seu repositório e pasta no GitHub Pages
});
