import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/ActWebFront/",
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled']
  }

})
 