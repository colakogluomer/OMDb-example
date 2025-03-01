import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
    },
    define: {
      // Make env variables available in the client code
      // Note: Vite automatically exposes variables prefixed with VITE_
      // This is just for demonstration
      __APP_ENV__: JSON.stringify(env.NODE_ENV),
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "src/setupTests",
      mockReset: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Remove the additionalData section that's causing issues
        },
      },
    },
  }
})
