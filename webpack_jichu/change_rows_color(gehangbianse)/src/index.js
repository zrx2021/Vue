// 1.使用 ES6 导入语法，导入JQuery，并且用 $ 符号接受
//高级语法浏览器可能不支持（兼容性问题），所以需要webpack降级
import $ from 'jquery'

//导入样式（在webpack中，一切皆模块，都可以通过ES6导入语法进行导入和使用）
//如果某个模块中，使用from接受到的成员为undefined，则没必要进行接收
//使用了loader
import './css/index.css'
import './css/index.less'

//导入图片，得到图片文件并且动态赋值到img标签的src内
import logo from './images/logo.jpg'

//转换为base64图片
console.log(logo)

$('.box').attr('src', logo)

//2.定义 jQuery 的入口函数

$(function () {
    // 3.实现奇偶行变色，0是偶数，odd奇数选择器，even偶数选择器
    $('li:odd').css('background', 'red')
    $('li:even').css('background', 'yellow')
})

//babel-loadder高级语法测试
//定义一个装饰器函数
function info(target){
    target.info = 'Person info.'
}

//定义一个普通的类

@info
class Person{}

//故意写错的代码，配置后，测试报错行号与源代码行号是否一致
consle.log(Person.info)