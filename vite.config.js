import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Only use base for production (GitHub Pages); keeps dev URLs simple
  base: process.env.NODE_ENV === 'production' ? '/taniti/' : '/',
})
