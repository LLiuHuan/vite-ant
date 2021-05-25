import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    // 'primary-color': '#8c0776',
                    // 'link-color': '#77c22d',
                    'border-color-base': '#dcdee2',
                    'table-header-bg': '#f8f8f9',
                    'table-body-sort-bg': '#fff',
                },
                // modifyVars:getThemeVariables({
                //   dark: true, // 开启暗黑模式,如果要使用暗黑主题，则不能对ant的默认背景色进行修改
                // }),
                javascriptEnabled: true,
            },
        }
    }
})
