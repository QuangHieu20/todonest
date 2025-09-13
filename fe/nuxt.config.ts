// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import ViteTsConfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  css: [path.resolve(__dirname, 'assets/css/main.css')],
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  },
  vite: {
    plugins: [
      ViteTsConfigPaths()
    ]
  },
  // Environment configuration
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: process.env.API_SECRET,
    
    // Public keys (exposed to client-side)
    public: {
      apiUrl: process.env.API_URL || 'http://localhost:4000',
      nodeEnv: process.env.NODE_ENV || 'development'
    }
  },
  // Server configuration
  devServer: {
    host: process.env.NUXT_HOST || '0.0.0.0',
    port: parseInt(process.env.NUXT_PORT || '3000', 10)
  }
})
