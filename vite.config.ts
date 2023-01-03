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
        alias: {
            "#styles": './shared/styles',
        }
    }
});
