module.exports = {
    //声明babel可用的插件
    //将来，webpack在调用babel-loader的时候，会先加载plugins插件来使用
    plugins:[['@babel/plugin-proposal-decorators', {legacy: true}]]
}