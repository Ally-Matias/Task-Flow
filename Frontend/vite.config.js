import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      rejectUnauthorized: false,
      key: path.resolve(__dirname, 'Certificate/frontend.key'),
      cert: path.resolve(__dirname, 'Certificate/frontend.crt'),
    },
  },
  plugins: [react()],
})
