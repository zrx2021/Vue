## vue项目的运行流程

在工程化的项目中，vue 要做的事情很单纯：通过 `main.js` 把 `App.vue` 渲染到 `index.html` 的指定区域中。

其中：
① `App.vue` 用来编写待渲染的`模板结构`
② `index.html` 中需要预留一个 `el 区域`
③ `main.js` 把 App.vue 渲染到了 index.html 所预留的区域中

main.js：
```js
// 导入 vue 这个包，得到 Vue 构造函数
import Vue from 'vue'
// 导入 App.vue 根组件，将来要把 App.vue 中的模板结构，渲染到 HTML 页面中
// import App from './App.vue'
import Test from './Test.vue'

Vue.config.productionTip = false

// 创建 Vue 的实例对象
new Vue({
  // 把 render 函数指定的组件，渲染到 HTML 页面中
  render: h => h(Test)
}).$mount('#app')

// Vue 实例的 $mount() 方法，作用和 el 属性完全一样！

```

---

## 在template中只能有一个根元素，有多个会报错：

错误：
```vue
<template>
  <div></div>
  <div></div>
</template>
```