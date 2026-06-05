import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cineconcert.info/' : '/',
  plugins: [
    react(),
    {
      name: 'gh-pages-spa-fallback',
      closeBundle() {
        if (command === 'build') {
          copyFileSync(resolve('dist/index.html'), resolve('dist/404.html'))
        }
      },
    },
  ],
}))
