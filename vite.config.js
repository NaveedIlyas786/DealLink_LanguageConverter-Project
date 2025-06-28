import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // Ensure all imports of react / react-dom point to the same package
    dedupe: ['react', 'react-dom'],
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react')) {
              return 'vendor.react'
            }
            if (id.includes('lucide-react')) {
              return 'vendor.icons'
            }
            const parts = id.split('node_modules/')[1].split('/')
            const pkgName = parts[0].startsWith('@')
              ? parts.slice(0, 2).join('/')
              : parts[0]
            return `vendor.${pkgName}`
          }
        },
      },
    },
  },
})
