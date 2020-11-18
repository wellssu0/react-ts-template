module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true,
    "jsx-control-statements/jsx-control-statements": true // 能够在jsx中使用if，需要配合另外的babel插件使用
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": 'module',
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "globals": {
    // "wx": "readonly",
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-control-statements/recommended", // 需要另外配合babel插件使用
    "prettier" // prettier放在最后
  ],
  "settings": {
    "react": {
      "version": "detect" // 自动读取已安装的react版本
    }
  },
  "plugins": ["@typescript-eslint", "react", "jsx-control-statements",  "prettier"],
  // "rules": {
  //   "no-extra-semi": 0, // 禁止不必要的分号
  //   "quotes": ['error', 'single'], // 强制使用单引号
  //   "no-unused-vars": 0 // 不允许未定义的变量
  //   // ...下面可以扩展配置
  // }
  "rules": {
    "prettier/prettier": 2, // 这样prettier的提示能够以错误的形式在控制台输出
  }
};