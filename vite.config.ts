import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      experimental: {
        prebundleSvelteLibraries: true,
      }
    })
  ],
  optimizeDeps: {
    include: ['svg-baker-runtime/browser-sprite.js', 'svg-baker-runtime/browser-symbol.js']
  },
  base: './',
})
