import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src'),
      '@/api': path.resolve(__dirname, './src/api'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/constants': path.resolve(__dirname, './src/constants'),
      '@/config': path.resolve(__dirname, './src/config'),
      '@/features': path.resolve(__dirname, './src/features'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/providers': path.resolve(__dirname, './src/providers'),
      '@/routes': path.resolve(__dirname, './src/routes'),
      '@/stores': path.resolve(__dirname, './src/stores'),
      '@/test': path.resolve(__dirname, './src/test'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../dist',
  },
});
