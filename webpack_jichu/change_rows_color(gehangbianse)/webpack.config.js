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
    plugins: [htmlPlugin],
    devServer: {
        open: true,
        port: 80
    },
    module: {
        rules: [
            //定义了不同模块对应的loader，顺序是从后往前
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            //处理.less文件的loader
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            //处理图片文件的loader
            //如果需要调用的loader只有一个，则只传递一个字符串，有多个则用数组
            {test: /\.jpg|png|gif$/, use: 'url-loader'},
            //使用babel-loader处理高级的js语法
            //在配置babel-loader的时候，程序员只需把自己的代码进行转换即可；一定要排除node_modules目录中的JS文件
            //因为第三方包中的JS兼容性，不需要程序员关心
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
}