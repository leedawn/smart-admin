import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
import { UserConfig } from "vitest";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: { vue: "Vue" },
  },
};

export const config = {
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true,
    brotliSize: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      formats: ["esm", "umd", "iife"],
    },
    cssCodeSplit: true, // css 文件单独打包
    outDir: ".dist",
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
};
export default defineConfig(config as UserConfig);
