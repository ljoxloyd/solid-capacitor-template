import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid'

export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
        minify: false,
        emptyOutDir: true,
    },
    plugins: [
        solid()
    ],
    resolve: {
        alias: {
            "#styles": './shared/styles'
        }
    }
});
