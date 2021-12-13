/*
 * @Descripttion:
 * @version: 1.0
 * @Author: mipaifu328
 * @Date: 2021-12-01 10:05:43
 * @LastEditors: mipaifu328
 * @LastEditTime: 2021-12-13 11:07:37
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import svgLoader from 'vite-svg-loader'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer'

function resolve(dir) {
  return join(__dirname, dir)
}

const localEnabled = process.env.USE_MOCK || false
const prodEnabled = process.env.USE_CHUNK_MOCK || false
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: '8888',
  },
  build: {
    // sourcemap: true,
  },
  plugins: [
    vue(),
    svgLoader(),
    viteCompression(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 50,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      }
    }),
    visualizer({
      filename: 'analyzer.html',
      title: '打包分析',
      // sourcemap: true,
      template: 'treemap',
      gzipSize: true,
      brotliSize: true,
    }),
    viteMockServe({
      mockPath: './src/mock',
      localEnabled: localEnabled,
      prodEnabled: prodEnabled,
      injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,
      supportTs: false,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      '@c': resolve('src/components'),
      '@icons': resolve('src/assets/icons'),
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/assets/css/baseColor.less'
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
})
