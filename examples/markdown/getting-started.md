# 快速上手

ZYCLOUD UI是基于Element Plus二次开发的Vue 3组件库，提供企业软件开发时常用的组件

## 安装

推荐使用 npm 的方式安装

```
npm install zycloud-ui
```

使用时需要安装Element Plus

```
npm install element-plus --save
```

因为需要使用scss，所以需要安装sass

```
npm install -D sass sass-loader
```

如果使用element plus的icon，根据element plus文档安装

```
npm install @element-plus/icons-vue
```

## 完整引入

在 main.js 中写入以下内容：

```
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

## 使用规范样式

创建一个index.scss文件，并写入：

```
@use "zycloud-ui/src/styles/themes/default.scss";
@use "zycloud-ui/src/styles/index.scss";
```

在 main.js 中引入index.scss：

```
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import ZyCloud from 'zycloud-ui';
import "./index.scss";

import * as ElementPlusIconsVue from '@element-plus/icons-vue' // element plus的icon需要另安装

const app = createApp(App)
app.use(ElementPlus)
app.use(ZyCloud)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
```

## 自定义样式

创建一个theme.scss文件，参考zycloud-ui/src/styles/themes/default.scss进行自定义变量，例如：

```
@forward "zycloud-ui/src/styles/common/variables.scss" with (
  $zy-filter-bar: (
    'color': #646A73,
    'drawer-color': #646A73,
    'condition-color': #0C296E,
    'condition-bgColor': #3370FF19,
    'option-bgColor': #F5F6F7,
    'option-hover-bgColor': #3370FF19,
    'scroll-bgColor': #1F232919
  ),
  $zy-icon-button: (
    'color': #1F2329,
  )
);
```

然后创建index.scss，并写入：

```
@use "./theme.scss";
@use "zycloud-ui/src/styles/index.scss";

```

在 main.js 中引入index.scss：

```
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import ZyCloud from 'zycloud-ui';
import "./index.scss";

import * as ElementPlusIconsVue from '@element-plus/icons-vue' // element plus的icon需要另安装

const app = createApp(App)
app.use(ElementPlus)
app.use(ZyCloud)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
app.component(key, component)
}
app.mount('#app')

```

