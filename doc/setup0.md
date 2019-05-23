# 手动搭建 vue 开发环境 - 基础

技术栈： webpack4、babel7、vue2

- [x] es6/7/8 转 es5
- [x] es6/7/8 api 转 es5
- [x] 处理 css
- [x] 处理 font
- [x] 处理 image
- [x] 处理 vue
- [x] 创建 html
- [ ] 热更新

## es6/7/8 转 es5

- 依赖安装

```sh
npm install babel-loader @babel/core @babel/preset-env -D
```

- 修改 webpack 配置

```js
module: {
  // 其它选项...
  rules: [
    // 其它选项...
    {
      test: /\.js$/,
      include: /src/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
}
```

- 修改 package.json 配置

```json
"babel": {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "browsers": [
              "> 1%",
              "last 2 versions"
            ]
          }
        }
      ]
    ]
  }
```

## es6/7/8 api 转 es5

- 依赖安装

```sh
npm install core-js@2 @babel/runtime-corejs2 -S
```

- 修改 babel.config.js 配置, 按需引入 polyfill.

```js
module.exports = function(api) {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 2,
          targets: {
            browsers: ['> 1%', 'last 2 versions']
          }
        }
      ]
    ]
  }
}
```

## 处理 css

- 依赖安装

```sh
npm install -D style-loader css-loader
```

- 修改 webpack 配置

```js
module: {
  rules: [
    // 其它选项...
    {
      test: /\.css$/,
      include: [/src/],
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
    }
  ]
}
```

## 处理 font

- 依赖安装

```sh
npm install -D url-loader
```

- 修改 webpack 配置

```js
module: {
  rules: [
    // 其它选项...
    {
      test: /\.(eot|woff2?|ttf|svg)(\?.*)?$/,
      include: [/src/],
      use: 'url-loader'
    }
  ]
}
```

## 处理 image

- 修改 webpack 配置

```js
module: {
  rules: [
    // 其它选项...
    {
      test: /\.(jpe?g|png?|webp|gif)(\?.*)?$/,
      include: [/src/],
      use: 'url-loader'
    }
  ]
}
```

## 处理 vue

- 依赖安装

```sh
npm install -D vue-loader vue-template-compiler
```

- 修改 webpack 配置

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin.js')

module: {
  rules: [
    // 其它选项...
    {
      test: /\.vue$/,
      include: [/src/],
      use: 'vue-loader'
    }
  ]
}

plugins: [
  // 其它选项...
  new VueLoaderPlugin()
]
```

## 创建 html

- 创建 html 模板文件，保存路径 src/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>m-admin</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

- 依赖安装

```sh
  npm install -D html-webpack-plugin
```

- 修改 webpack 配置

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

plugins: [
  // 其它选项...
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/index.html')
  })
]
```

## 热更新

- 依赖安装

```sh
npm install -D webpack-dev-server
```

- 修改 webpack 配置

```js
const webpack = require('webpack')

plugins: [
  // 其它选项...
  new webpack.HotModuleReplacementPlugin()
]
```

- 修改 package 配置

```json
  "scripts": {
    "dev": "webpack-dev-server --config ./build/webpack.config.js"
  }
```
