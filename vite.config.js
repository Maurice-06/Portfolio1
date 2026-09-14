import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' : le site est déployé sur GitHub Pages (sous-chemin).
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    host: true,
  },
})
