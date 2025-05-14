import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "localhost",
  //   port: 8088,
  //   proxy: {
  //     "/api": "http://localhost:8080"
  //   }
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
