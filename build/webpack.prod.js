/* 
  webpack.prod.js
  webpack 生产环境配置
  Created by M.Wang [cn_wang@139.com]
  2019-06-11 16:23 星期二
*/

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { commonConfig } = require('./webpack.config');
const config = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                include: [/src/],
                use: [
                    MiniCssExtractPlugin.loader,
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
                    options: {
                        limit: 10240, // 小于8KB以base64嵌入
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css',
        }),
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
};

module.exports = merge(commonConfig, config);
