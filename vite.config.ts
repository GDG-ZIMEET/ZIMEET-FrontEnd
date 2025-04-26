import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; 

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      utils: path.resolve(__dirname, 'src/utils'),
      api: path.resolve(__dirname, 'src/api'),
      recoiStores: path.resolve(__dirname, 'src/recoilStores'),
      styles: path.resolve(__dirname, 'src/styles'),
      types: path.resolve(__dirname, 'src/types'),
      pages: path.resolve(__dirname, 'src/pages'),
      fonts: path.resolve(__dirname, 'src/fonts'),
      data: path.resolve(__dirname, 'src/data'),
    },
  },
});
