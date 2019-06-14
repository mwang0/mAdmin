# 手动搭建 vue 开发环境 - 进阶

-   [*] css modules
-   [*] css 厂商前缀 https://juejin.im/post/5cb36a3ef265da03a1581d6d#heading-18
-   [*] css 文件提取、压缩 https://juejin.im/post/5cb36a3ef265da03a1581d6d#heading-39
    mini-css-extract-plugin:一般在线上环境使用这个插件，因为在开发环境中不支持 HMR。
-   [*] EsLint,prettier
-   [ ] 固定 moduleId/chunkId
-   [ ] 配置 proxy
-   [*] 拆分 webpack 配置文件
-   [*] CleanWebpackPlugin :自动清除上一次打包文件
-   [*] output 配置
-   [*] SourceMap 的配置,
    sourcemap：打包编译后的文件和源文件的映射关系，用于开发者调试用。
    -   source-map 把映射文件生成到单独的文件，最完整但最慢
    -   cheap-module-source-map 在一个单独的文件中产生一个不带列映射的 Map
    -   eval-source-map 使用 eval 打包源文件模块,在同一个文件中生成完整 sourcemap
    -   cheap-module-eval-source-map sourcemap 和打包后的 JS 同行显示，没有映射列
    -   development 环境推荐使用： devtool: 'cheap-module-eval-source-map',
    -   production 环境推荐使用： devtool: 'cheap-module-source-map',
-   [*] Tree Shaking
    -   注：当 optimization.minimizer 被重新赋值后 需要手动添加 “uglifyjs-webpack-plugin” 否则，js 文件不会压缩和执行 tree Shaking
-   [ ] js 代码分割
-   [ ] 分离 runtimeChunk, 并内联到 index.html 减少请求
-   [ ] 打包分析
-   [ ] 预取/预加载模块
-   [ ] 多进程打包
-   [ ] 使用 DLLPlugin 提高打包速度

// purifycssplugin
//
