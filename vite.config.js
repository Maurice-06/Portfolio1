import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  // Base pour les URLs relatives
  base: './',

  // Configuration de build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,

    // Optimisation des assets
    rollupOptions: {
      output: {
        // Noms de fichiers hashés pour le cache
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1)
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    }
  },

  // Résolution des imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@public': path.resolve(__dirname, './public'),
    },

    // Extensions supportées
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.png', '.jpg', '.jpeg', '.svg']
  },

  // Serveur de développement
  server: {
    port: 5173,
    host: true, // Accessible sur le réseau
    open: true, // Ouvre le navigateur automatiquement

    // Watch pour détecter les changements
    watch: {
      usePolling: false,
      interval: 100
    },

    // Proxy si nécessaire pour les APIs
    proxy: {
      // Exemple: '/api': 'http://localhost:3000'
    }
  },

  // Prévisualisation
  preview: {
    port: 4173,
    host: true
  },

  // Optimisation CSS
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },

  // Optimisation des assets
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif', '**/*.ico', '**/*.webp'],

  // Configuration des workers si nécessaire
  worker: {
    format: 'es',
    plugins: [react()]
  }
})