import path from 'path'
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid'
import sassDts from 'vite-plugin-sass-dts'

export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
        minify: false,
        emptyOutDir: true,
    },
    plugins: [
        solid(),
        sassDts({
            enabledMode: ['development', 'production'],
        })
    ],
    resolve: {
        // Caution! When updating aliases don't forget to update tsconfig.json
        alias: {
            "#styles": './shared/styles',
            '#icons': './assets/icons',
            '#imgs': './assets/imgs',
        }
    }
});
