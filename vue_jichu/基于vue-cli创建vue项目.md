## 单页面应用程序概念

`单页面应用程序`（英文名：`S`ingle `P`age `A`pplication）简称 SPA，顾名思义，指的是`一个 Web 网站中只有唯一的一个 HTML 页面`，所有的功能与交互都在这唯一的一个页面内完成。

---

## vue-cli概念

`vue-cli 是 Vue.js 开发的标准工具`。它简化了程序员基于 webpack 创建工程化的 Vue 项目的过程。

引用自 vue-cli 官网上的一句话：
程序员可以专注在撰写应用上，而不必花好几天去纠结 webpack 配置的问题。
中文官网：https://cli.vuejs.org/zh/

---

## vue-cli的安装和使用

vue-cli是一个npm上的一个`全局包`，`使用npm install`命令，即可方便地把它安装到自己的电脑上：

```bash
npm install -g @vue/cli
```

基于vue-cli快速生成工程化的Vue项目：
```bash
vue create 项目的名称
```

---

## vue项目的运行流程

在工程化的项目中，vue 要做的事情很单纯：通过 `main.js` 把 `App.vue` 渲染到 `index.html` 的指定区域中。

其中：
① `App.vue` 用来编写待渲染的`模板结构`
② `index.html` 中需要预留一个 `el 区域`
③ `main.js` 把 App.vue 渲染到了 index.html 所预留的区域中

---

## 组件化开发概念

`组件化开发`指的是：根据`封装`的思想，`把页面上可重用的 UI 结构封装为组件`，从而方便项目的开发和维护。

---

## vue中的组件化开发

vue 是一个`支持组件化开发`的前端框架。
vue 中规定：`组件的后缀名`是`.vue`。之前接触到的 App.vue 文件本质上就是一个 vue 的组件。

---

## vue组件的三个部分

每个vue组件都由三个部分构成：
- `template`：组件的`模板结构`
- `script`：组件的`JavaScript行为`
- `style`：组件的`样式`

### template

每个组件对应的模板结构，需要定义到` <template> 节点`中。

```html
<template>
    <!-- 当前组件的 DOM 结构，需要定义到 template 标签的内部 -->
</template>
```

注意：
- template 是一个 vue 提供的容器标签，只起到`包裹性质的作用`，他不会被渲染为真正的 DOM 元素
- template 中只能包含`唯一`的根节点

### script

开发者可以在`<script>`节点中`封装组件的 JavaScript 业务逻辑`。`<script>`节点的基本结构如下：

```html
<script>
    //data数据、method方法
    //都需要定义到export default 所导出的对象中。
    export default {}
</script>
```
---

# `.vue`组件中的 data 必须是函数
vue 规定：.vue 组件中的 data 必须`是`一个`函数`，不能直接指向一个数据对象。

正确：
```html
data(){
    count: 0
}
```

错误：
```html
data: {
    count: 0
}
```

错误的方法会导致多个组件实例共用同一份数据的问题，请参考官方给出的示例：
https://cn.vuejs.org/v2/guide/components.html#data-必须是一个函数

---

### style

vue 规定：组件内的`<style>`节点是`可选的`，开发者可以在`<style>`节点中`编写样式美化当前组件的 UI 结构`。
`<style>`节点的基本结构如下：

<style>
    h1{
        font-weight: normal;
    }
</style>

#### 使style中支持`less语法`
在`<style>`标签上添加``lang="less"`属性，即可使用less语法编写组件的样式，如下嵌套css的写法：

```html
<style lang="less">
h1 {
    font-weight: normal;
    span {
        color: red;
    }
}
</style>
```
