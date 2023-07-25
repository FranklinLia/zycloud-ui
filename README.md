<!--
 * @Author: LHL
 * @LastEditors: LHL
 * @LastEditTime: 2023-07-25 11:25:18
-->
# ZYCLOUD UI

ZYCLOUD UI是基于Element Plus二次开发的Vue 3组件库，提供企业软件开发时常用的组件

### 安装

```sh
npm install zycloud-ui
```

使用时需要安装Element Plus

```sh
npm install element-plus --save
```

因为需要使用scss，所以需要安装sass

```sh
npm install -D sass sass-loader
```

如果使用element plus的icon，根据element plus文档安装

```sh
npm install @element-plus/icons-vue
```

### 完整引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import ZyCloud from 'zycloud-ui';
import "zycloud-ui/src/styles/index.scss"; // 已经包含了element plus的scss

import * as ElementPlusIconsVue from '@element-plus/icons-vue' // element plus的icon需要另安装

const app = createApp(App)
app.use(ElementPlus)
app.use(ZyCloud)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
```
### 组件文档

文档地址：https://zycloud-ui.github.io/zycloud-ui/

### 致谢

- [Element Plus](https://element-plus.org/zh-CN/) 感谢 Element Plus 提供的优秀组件库

