// 1.使用 ES6 导入语法，导入JQuery，并且用 $ 符号接受
//高级语法浏览器可能不支持（兼容性问题），所以需要webpack降级
import $ from 'jquery'

//2.定义 jQuery 的入口函数

$(function () {
    // 3.实现奇偶行变色，0是偶数，odd奇数选择器，even偶数选择器
    $('li:odd').css('background', 'red')
    $('li:even').css('background', 'pink')
})