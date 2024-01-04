import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from "path"



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    /**
     * vue
     */
    vue(),
    /**
     * 自动导入
     */
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等      
      imports: ['vue'],
    })
  ],
  resolve: {
    /**
     * @符号代表根路径
     */
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  /**
   * 配置服务器信息
   */
  server: {
    port: 8080
  },
})
