const path = require('path');

module.exports = {
  entry: './src/index.js',   // 入口文件
  output: {                  // 输出文件配置
    filename: 'bundle.js',   // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
  },
  module: {
    rules: [
      { 
        test: /\.js$/,        // 匹配 JavaScript 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: 'babel-loader'   // 使用 babel-loader 转译 JavaScript
      },
      // 其他文件类型的 loader 配置
    ]
  },
  // 其他配置，如插件、devServer 等
};
