/* 
  babel.config.js
  babel 配置文件
  Created by M.Wang [cn_wang@139.com]
  2019-05-21 11:42 星期二
*/

module.exports = function(api) {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          // 不需要在项目中手动引入@babel/polyfill的。babel自动检测哪个文件要用到哪些包，就在那个文件头部引入那些包
          useBuiltIns: 'usage',
          corejs: 2,
          targets: {
            // https://browserl.ist/
            browsers: ['> 1%', 'last 2 versions']
          }
        }
      ]
    ]
  }
}
