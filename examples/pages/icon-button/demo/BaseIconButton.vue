<demo>基本用法</demo>
<template>
  <div class="icon-buttons">
    <zy-icon-button name="EditPen" @click="click"/>
    <zy-icon-button name="EditPen" type="primary"/>
    <zy-icon-button name="EditPen" type="success"/>
    <zy-icon-button name="EditPen" type="warning"/>
    <zy-icon-button name="EditPen" type="danger"/>
    <zy-icon-button name="EditPen" type="info"/>
    <zy-icon-button name="EditPen" color="#5005b9"/>
  </div>
  <div class="icon-buttons">
    <zy-icon-button name="EditPen" disabled @click="click"/>
    <zy-icon-button name="EditPen" disabled @click="click" :size="24"/>
  </div>
  <div class="icon-buttons">
    <zy-icon-button name="Loading" loading disabled/>
  </div>
</template>

<script setup lang="ts">
function click() {
  console.log("click")
}
</script>


<style lang="scss" scoped>
.icon-buttons {
  display: flex;

  & + & {
    margin-top: 10px;
  }
}
</style>
