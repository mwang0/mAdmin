/*
  webpack.js
  webpack 公共配置
  Created by M.Wang [cn_wang@139.com]
  2019-05-20 15:59 Monday
*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const commonConfig = {
    module: {
        rules: [
            // es6/7/8 转 es6
            {
                test: /\.js$/,
                include: /src/,
                use: { loader: 'babel-loader' },
            },

            // 处理 font
            {
                test: /\.(eot|woff2?|ttf|svg)(\?.*)?$/,
                include: [/src/],
                use: {
                    loader: 'url-loader',
                },
            },

            // 处理 vue
            {
                test: /\.vue$/,
                include: [/src/],
                use: {
                    loader: 'vue-loader',
                },
            },
        ],
    },
    plugins: [
        // 处理 vue
        new VueLoaderPlugin(),

        // 创建 html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
        }),
    ],
};

module.exports = {
    commonConfig,
};
