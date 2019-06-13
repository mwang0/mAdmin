/* 
  webpack.dev.js
  开发环境配置
  Created by M.Wang [cn_wang@139.com]
  2019-06-11 16:14 星期二
*/

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { commonConfig } = require('./webpack.config');
const config = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                include: [/src/],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]--[hash:base64:4]',
                        },
                    },
                    'postcss-loader',
                ],
            },
            // 处理 image
            {
                test: /\.(jpe?g|png?|webp|gif)(\?.*)?$/,
                include: [/src/],
                use: {
                    loader: 'url-loader',
                },
            },
        ],
    },
    plugins: [
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        port: 7070,
    },
};

module.exports = merge(commonConfig, config);
