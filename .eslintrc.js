module.exports = {
    root: true,                         // 根目录为 ESLint 的根目录
    env: {
      node: true,                      // 预定义的环境为 Node.js
      browser: true,                   // 预定义的环境为浏览器环境
      es6: true                        // 启用 ES6 语法支持
    },
    extends: [
      'eslint:recommended',            // 使用 ESLint 推荐的规则
      'plugin:@typescript-eslint/recommended', // 使用 @typescript-eslint 推荐的规则
      'plugin:prettier/recommended'    // 启用 Prettier 的规则
    ],
    parser: '@typescript-eslint/parser', // 指定解析器为 @typescript-eslint/parser
    parserOptions: {
      ecmaVersion: 2018,               // 使用 ECMAScript 2018 语法
      sourceType: 'module'             // 使用 ES 模块
    },
    plugins: [
      '@typescript-eslint',            // 启用 @typescript-eslint 插件
      'prettier'                       // 启用 Prettier 插件
    ],
    rules: {
      'prettier/prettier': 'error',    // 使用 prettier 的规则
      '@typescript-eslint/explicit-module-boundary-types': 'off' // 关闭对函数的返回类型要求
      // 其他自定义规则...
    }
  };
  