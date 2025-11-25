import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/live-site-example-1/", // ← 修改成你的 GitHub 仓库名！
});
