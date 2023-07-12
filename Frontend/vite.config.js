import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      rejectUnauthorized: false,
      key: path.resolve(__dirname, 'Certificate/taskflow.key'),
      cert: path.resolve(__dirname, 'Certificate/taskflow.crt'),
    },
  },
  plugins: [react()],
})
