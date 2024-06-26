import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [
                ElementPlusResolver() // Auto import icon components
            ],
            imports: ['vue', 'vue-router', 'pinia'],
            dts: './types/auto-imports.d.ts',
            // eslint 报错解决：'ref' is not defined
            eslintrc: {
                // 默认 false, true 启用生成。生成一次就可以，避免每次工程启动都生成，一旦生成配置文件之后，最好把 enable 关掉，即改成 false。结合文档1
                enabled: false
                // 否则这个文件每次会在重新加载的时候重新生成，这会导致 eslint 有时会找不到这个文件。当需要更新配置文件的时候，再重新打开
                // filepath: './.eslintrc-auto-import.json' // 默认就是 ./.eslintrc-auto-import.json
                // globalsPropValue: true // 默认 true
            }
        }),
        Components({
            resolvers: [ElementPlusResolver()],
            dts: './types/components.d.ts'
        }),
        createStyleImportPlugin({
            resolves: [ElementPlusResolve()],
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    resolveStyle: (name: string) => {
                        return `element-plus/theme-chalk/${name}.css`
                    }
                }
            ]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
            @use "./src/styles/variables.scss" as *;
            @use "./src/styles/mixin.scss" as *;`,
                javascriptEnabled: true
            }
        }
    }
})
