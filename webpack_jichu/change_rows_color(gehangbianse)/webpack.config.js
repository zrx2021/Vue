// 导入html-webpack-plugin这个插件，获得构造函数
const HtmlPlugin = require('html-webpack-plugin')
//new 构造函数，创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    //指定复制出来的文件名和存放路径
    filename: './index.html'
})

// 使用Node.js中的导出语法，向外导出一个 webpack的配置对象
module.exports = {
    //代表 webpack 运行的模式，可选值有 development 和 production
    mode: 'development',
    //插件的数组，将来 webpack 在运行时，会加载调用的这些插件
    plugins: [htmlPlugin]
}