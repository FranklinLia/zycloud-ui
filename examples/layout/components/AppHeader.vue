<!--
 * @Author: LHL
 * @LastEditors: LHL
 * @LastEditTime: 2023-07-25 10:19:28
-->
<template>
  <div class="header-wrapper">
    <div class="logo">
      <!-- <img src="../../assets/logo.png" height="25" alt="" /> -->
      <div>ZyCloudUI</div>
    </div>
    <div class="right">
      <span class="version">{{ PackageJSON.version }}</span>
      <a href="#" target="_blank"><img src="../../assets/github.png" height="30" alt="" /></a>
    </div>
  </div>
</template>
<script setup lang="ts">
import PackageJSON from "../../../package.json";
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-wrapper {
  // background-color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  .logo {
    margin-left: 15px;
    color: #ffffff;
    font-size: 40px;
    font-weight: bold;
    font-style: italic;
    text-shadow: 0 0 3px #2baef3;
  }
  .version {
    font-size: 16px;
    margin-right: 25px;
    vertical-align: super;
    color: #ffffff;
  }
}
</style>

