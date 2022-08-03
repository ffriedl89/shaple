import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    alias({
      entries: [
        { find: "react", replacement: "preact/compat" },
        { find: "react-dom/test-utils", replacement: "preact/test-utils" },
        { find: "react-dom", replacement: "preact/compat" },
        { find: "react/jsx-runtime", replacement: "preact/jsx-runtime" },
      ],
    }),
    preact(),
    vanillaExtractPlugin(),
  ],
});
