<template>
  <!-- 文档说明 -->
  <document-table :data="attributes" />
  <!-- 一级标题 -->
  <h1 class="component-h1">SpeedDial 快速拨号</h1>
  <!-- 一级描述 -->
  <p>快速拨号，支持4个方向，支持固定位置，支持移动位置；图标支持iconfont；</p>
  <!-- BaseTable内容 -->
  <div class="component-block" v-for="(item, index) in comList" :key="index">
    <h2>{{ item.title }}</h2>
    <p>{{ item.titleDesc }}</p>
    <code-example :description="item.description" :component="item.component" />
  </div>
</template>

<script setup lang="ts">
import BaseSpeedDial from "./demo/BaseSpeedDial.vue";
import SpeedDialPosition from "./demo/SpeedDialPosition.vue";
import SpeedDialTrigger from "./demo/SpeedDialTrigger.vue";
import SpeedDialCustom from "./demo/SpeedDialCustom.vue";
import { attributes } from "./attributes";

const comList = [
  {
    title: "基本用法",
    titleDesc: "可以设置方向，大小，主题，图标",
    component: BaseSpeedDial,
    description: `控制台查看click事件`
  },
  {
    title: "定位方式",
    titleDesc: "position 设置 absolute / fixed 可以固定位置，并且可以移动位置",
    component: SpeedDialPosition,
    description: `设置localKey，可以保存移动位置到localStorage`
  },
  {
    title: "开关方式",
    titleDesc: "",
    component: SpeedDialTrigger,
    description: `设置localKey，可以保存移动位置到localStorage`
  },
  {
    title: "自定义内容",
    titleDesc: "",
    component: SpeedDialCustom,
  }
]
</script>

<style lang="scss" scoped>
.component-h1 {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
}

.component-block {
  margin-top: 40px;

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }

  h2 {
    font-weight: 400;
    color: #1f2f3d;
  }
}
</style>
