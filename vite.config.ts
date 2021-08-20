import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import legacyPlugin from '@vitejs/plugin-legacy'
import path from "path";

// 区分环境设置。用来打包和测试环境发布的相关
// const env = process.argv[process.argv.length - 1]
// const base = config[env]
// 关联cdn相关配置


// 官方提供的打包按需
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  // base: base.cdn
  base: './', // index.html文件所在位置
  root: './', // js导入的资源路径，src
  define: {
    'process.env.REACT_APP_IS_LOCAL': "'true'",
    // global: {}
  },
  build: {
    minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
    manifest: true, // 是否产出maifest.json
    sourcemap: true, // 是否产出soucemap.json
    outDir: 'dist', // 产出目录
  },
  plugins: [
    reactRefresh(),
    legacyPlugin({
      targets: ['Android > 39', 'Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15'],
    }),
    dynamicImportVars({
      include: ['tsx'],
      warnOnError: true
    })
    // vitePluginImp({
    //   libList: [
    //     // 暂时还没有
    //     {
    //       libName: "antd",
    //       style: (name) => `antd/lib/${name}/style/index.less`,
    //     },
    //   ],
    // })
  ],
  css: {
    preprocessorOptions: {
      // scss: {
      //   additionalData: `$injectedColor: orange;`
      // }
    },
    modules: {
      // 样式小驼峰转化, 
      //css: goods-list => tsx: goodsList
      localsConvention: 'camelCase'
    }
  },
  esbuild: {
    // jsxFactory: 'h',
    // jsxFragment: 'Fragment'
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './ '), // 根路径
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components')
    }
  }
})

// export default defineConfig(({ command, mode }) => {
//   if (command === 'serve') {
//     return {
//       // serve 独有配置
//     }
//   } else {
//     return {
//       // build 独有配置
//     }
//   }
// })