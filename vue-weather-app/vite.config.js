import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 以下、ホットリロード用に追加
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  // 以上、ホットリロード用に追加
});
