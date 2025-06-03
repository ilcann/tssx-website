import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import ReactCompilerConfig from "babel-plugin-react-compiler";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          d3: ["d3", "topojson-client"],
          ui: ["lucide-react", "react-scroll", "react-countup"],
          helmet: ["react-helmet-async"],
          slidedown: ["react-slidedown"],
        },
      },
    },
    // Enable compression
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react"],
    exclude: ["d3", "topojson-client"], // Lazy load these heavy dependencies
  },
  // Enable tree shaking
  esbuild: {
    treeShaking: true,
    drop: ["console", "debugger"],
  },
});
