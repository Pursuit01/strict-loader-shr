### 介绍

一个自定义的 webpack loader，用来将js文件转成严格模式，支持缓存功能。

### 安装

```
npm i strict-loader-shr -D
```

### webpack.config.js 配置

```js
module: {
  rules: [
    {
      test: /\.js$/i,
      use: 'strict-loader-shr'
    }
  ]
}
```
