import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // If you wanna specify the env file for each environment, you can do it like this:
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
    },
    define: {
      __APP_ENV__: JSON.stringify(env.NODE_ENV),
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  }
})
