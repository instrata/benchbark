import path from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import TailwindCss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    base: "/benchbark/",
    plugins: [
        Vue(),
        TailwindCss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, "./src"),
        },
    },
});
