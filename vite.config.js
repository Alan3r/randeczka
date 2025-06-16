import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/randeczka/', // <-- Upewnij się, że to jest dokładnie nazwa repozytorium na GitHub
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
});