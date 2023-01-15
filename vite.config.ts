import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import solid from 'vite-plugin-solid'

export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
        minify: false,
        emptyOutDir: true,
    },
    plugins: [
        solid(),
        vanillaExtractPlugin()
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
