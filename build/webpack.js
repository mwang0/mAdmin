/* 
  webpack.js
  webpack 公共配置
  Created by M.Wang [cn_wang@139.com]
  2019-05-20 15:59 Monday
*/
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        include: [/src/],
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  }
}
