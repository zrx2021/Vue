# Source Map学习笔记

## 什么是Source Map

`Source Map就是一个信息文件，里面储存着位置信息。`也就是说，Source Map文件中存储着压缩混淆后的代码，所对应的`转换前的位置`。
有了它，出错的时候，除错工具将`直接显示原始代码`，`而不是转换后的代码`，能够极大的方便后期的调试。

源代码的行号与生成文件的行号不同，如果代码出错，在浏览器定位的行号是生成文件的，对调试修改代码造成了麻烦，为了方便就需要Source Map。

Source Map文件后缀为`js.map`

## 解决默认Source Map的问题

在开发环境下，推荐在`webpack.config.js`中添加如下的配置，即可保证`运行时报错的行数`与`源代码的行数`保持一致：

```js
module.exports = {
    mode: 'development',
    //eval-source-map仅限在开发模式使用，不建议在生产模式下使用
    //此选项生成的Source Map能够保证“运行时报错的行数”与“源代码的行数”保持一致，发布的时候考虑安全性，需要注释掉
    devtool: 'eval-source-map',
    //省略其它配置项
}
```

## webpack`生成环境下的`Source Map

在`生产环境下`，如果`省略了devtool选项`，则最终生成的文件中`不包含Source Map`。这能够`防止原始代码`通过Source Map的形式`暴露`给别人。

## 只定位行数，不暴露源码

在生产环境下，如果`只想定位报错的具体行数`，且`不想暴露源码`。此时可以将`devtool`的值设置为`nosources-source-map`。

## 定位行数且暴露源码

在生产环境下，如果`想在定位报错行数的同时`，展示具体报错的源码。此时可以将`devtool`的值设置为`source-map`。

**采用此选项后：应该设置服务器配置为，`不允许普通用户访问source map文件！`**

## 总结，在实践中可以按如下做

1. 开发环境下：
- 建议把devtool的值设置为`eval-source-map`
- 可以精准定位到具体的错误行

2. 生产环境下：
- 建议`关闭Source Map`或将devtool的值设置为`nosources-source-map`
- 可以防止源码泄露，提高网站的安全性