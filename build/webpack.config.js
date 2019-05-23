/* 
  webpack.js
  webpack 公共配置
  Created by M.Wang [cn_wang@139.com]
  2019-05-20 15:59 Monday
*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
module.exports = {
  module: {
    rules: [
      // 1、es6/7/8 转 es6
      {
        test: /\.js$/,
        include: /src/,
        use: { loader: 'babel-loader' }
      },

      // 2、处理 css
      {
        test: /\.css$/,
        include: [/src/],
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },

      // 3、处理 font
      {
        test: /\.(eot|woff2?|ttf|svg)(\?.*)?$/,
        include: [/src/],
        use: {
          loader: 'url-loader'
        }
      },

      // 4、处理 image
      {
        test: /\.(jpe?g|png?|webp|gif)(\?.*)?$/,
        include: [/src/],
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192 //小于8KB以base64嵌入
          }
        }
      },

      // 5.1、处理 vue
      {
        test: /\.vue$/,
        include: [/src/],
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin(),

    // 5.2、处理 vue
    new VueLoaderPlugin(),

    // 6、创建 html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
}
