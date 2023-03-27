module.exports = function (context) {
  // 如果缓存存在，就使用缓存，用来加快 webpack 打包速度。
  if (this.cacheable) {
    this.cacheable();
  }

  var prefix = "'use strict';\n\n";
  return prefix + context;
};
