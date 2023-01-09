//导入node.js中专门操作路径的模块，用require导入
const path = require('path')

// 导入html-webpack-plugin这个插件，获得构造函数
const HtmlPlugin = require('html-webpack-plugin')
//new 构造函数，创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    //指定复制出来的文件名和存放路径
    filename: './index.html'
})

//注意，左侧的{}符号是解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 使用Node.js中的导出语法，向外导出一个 webpack的配置对象
module.exports = {
    //代表 webpack 运行的模式，可选值有 development 和 production
    mode: 'development',
    //在开发调试阶段，建议把devtool的值设置为eval-source-map
    // devtool: 'eval-source-map',
    //在实际发布的时候，建议设为如下，或者直接关闭Source Map
    devtool: 'nosources-source-map',
    //entry：指定要处理哪个文件
    //__dirname代表当前文件的存放路径
    entry: path.join(__dirname, './src/index.js'),
    //指定生成的文件要存放到哪里
    output: {
        //存放的目录
        path: path.join(__dirname, 'dist'),
        //生成的文件名
        filename: 'js/main.js'
    },
    //插件的数组，将来 webpack 在运行时，会加载调用的这些插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
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
            //在配置url-loader的时候，多个参数之间，使用&符号进行分隔
            {test: /\.jpg|png|gif$/, use: 'url-loader?limit=100&outputPath=images'},
            //使用babel-loader处理高级的js语法
            //在配置babel-loader的时候，程序员只需把自己的代码进行转换即可；一定要排除node_modules目录中的JS文件
            //因为第三方包中的JS兼容性，不需要程序员关心
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
}