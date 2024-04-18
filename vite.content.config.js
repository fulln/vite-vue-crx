import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { CRX_CONTENT_OUTDIR } from './globalConfig'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        // 输出目录
        outDir: CRX_CONTENT_OUTDIR,
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    // 附属文件命名，content script会生成配套的css
                    return 'content.css'
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    // 解决代码中包含process.env.NODE_ENV导致无法使用的问题
    define: {
        'process.env.NODE_ENV': null,
    },
    plugins: [vue()],
})
