// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:14514',  // 代理的目标地址
        changeOrigin: true,                // 是否改变请求源头
        rewrite: (path) => path.replace(/^\/api/, ''),  // 重写路径，将 /api 前缀移除
      },
    },
  },
});
