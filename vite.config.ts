import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Build ID for version check (timestamp per deploy; new build on Netlify = new ID)
const buildId = `${Date.now()}`

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // prompt for update when new SW available
      includeAssets: ['favicon.svg', 'WhatsApp-Brad.jpg', 'BuyMeACoffee-whistlerpeak.png'],
      manifest: {
        name: 'SSS QR – Instructor',
        short_name: 'SSS QR',
        description: 'WhatsApp contact & Buy Me a Coffee – snowboard instructor',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,woff2}'],
        navigateFallback: '/index.html'
      }
    }),
    // Emit version.json and inject build id for update detection
    {
      name: 'version-build',
      config() {
        return {
          define: {
            __BUILD_ID__: JSON.stringify(buildId),
            __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0')
          }
        }
      },
      writeBundle() {
        const outDir = resolve(process.cwd(), 'dist')
        const pkg = JSON.parse(
          readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8')
        )
        const versionPayload = {
          version: pkg.version,
          buildId,
          builtAt: new Date().toISOString()
        }
        writeFileSync(
          resolve(outDir, 'version.json'),
          JSON.stringify(versionPayload, null, 2)
        )
      }
    }
  ],
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
