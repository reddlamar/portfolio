import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { brand } from './src/data/brand'

export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react(),
    tailwindcss(),
    {
      // Fills the title, description and favicon into index.html from src/data/brand.ts
      name: 'brand-html',
      transformIndexHtml: (html: string) =>
        html
          .replaceAll('__BRAND_TITLE__', brand.title)
          .replaceAll('__BRAND_DESCRIPTION__', brand.description)
          .replaceAll('__BRAND_FAVICON__', brand.favicon),
    },
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
})
