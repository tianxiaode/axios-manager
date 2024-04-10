module.exports = {
    hooks: {
      'pre-commit': 'lint-staged', // 在提交前运行 lint-staged 命令
      'pre-push': 'npm test',      // 在推送前运行 npm test 命令
      // 其他 Git 钩子和对应的执行命令...
    },
  };