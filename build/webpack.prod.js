/* 
  webpack.prod.js
  webpack 生产环境配置
  Created by M.Wang [cn_wang@139.com]
  2019-06-11 16:23 星期二
*/
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { commonConfig } = require('./webpack.config');

const config = {
    mode: 'production',
    output: {
        // 输出目录
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].chunk.js',
    },
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
        minimizer: [new OptimizeCSSAssetsPlugin({}), new UglifyJsPlugin()],
        splitChunks: {
            //开启代码分割
            chunks: 'all', // all|initial|async 所有|同步|异步 进行代码分割
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10, //谁优先级大就把打包后的文件放到哪个组
                    name: 'vendors',
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true, //模块已经被打包过了，就不用再打包了，复用之前的就可以
                    name: 'common', //打包之后的文件名
                },
            },
        },
    },
};
module.exports = merge(commonConfig, config);
