<template>
  <!-- 文档说明 -->
  <document-table :data="attributes"/>
  <!-- 一级标题 -->
  <h1 class="component-h1">SearchBar 搜索条</h1>
  <!-- 一级描述 -->
  <p>搜索条，提供快速搜索，高级搜索，自定义按钮</p>
  <!-- BaseTable内容 -->
  <div class="component-block" v-for="(item, index) in comList" :key="index">
    <h2>{{ item.title }}</h2>
    <p>{{ item.titleDesc }}</p>
    <code-example :description="item.description" :component="item.component"/>
  </div>
</template>

<script setup lang="ts">
import {attributes} from "./attributes";
import BaseSearchbar from "./demo/BaseSearchbar.vue";
import SearchBarButtonDemo from "./demo/SearchBarButtonDemo.vue";
import QuickSearchDemo from "./demo/QuickSearchDemo.vue";
import ComplexSearchDemo from "./demo/ComplexSearchDemo.vue";
import EchoConditionsDemo from "./demo/EchoConditionsDemo.vue";

const comList = [
  {
    title: "基本用法",
    titleDesc: "Searchbar 基础用法",
    component: BaseSearchbar,
  },
  {
    title: "自定义按钮",
    titleDesc: "可以禁用清除和刷新按钮，也可以添加自定义按钮",
    component: SearchBarButtonDemo,
    description: ``
  },
  {
    title: "快速搜索",
    titleDesc: "两种方式: 1、直接使用快速搜索组件。2、禁用高级搜索(不设置高级搜索组件)",
    component: QuickSearchDemo,
    description: `控制台显示change事件输出`
  },
  {
    title: "高级搜索",
    titleDesc: "两种方式设置高级搜索组件: 1、使用v-slot:complex。2、设置components组件数组",
    component: ComplexSearchDemo,
    description: `控制台显示事件输出`
  },
  {
    title: "回显条件",
    titleDesc: "设置初始条件，搜索框自动回显",
    component: EchoConditionsDemo,
    description: `搜索组件需要提供init和getCondition方法`
  }
]
</script>

<style lang="scss" scoped>
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
