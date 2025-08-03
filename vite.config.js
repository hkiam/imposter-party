import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/imposter-party/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: [
        'sounds/timer-end.mp3',
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'Imposter Party',
        short_name: 'Imposter',
        description: 'Wer ist der geheime Imposter? Ein Spiel für Freunde.',
        theme_color: '#ffffff',
        background_color: '#f3f4f6',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
