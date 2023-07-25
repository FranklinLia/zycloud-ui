<demo>线状分割</demo>
<template>
  <div class="demo-split">
    <zy-split-pane left="200" direction="horizontal">
      <template #left>
        <div class="demo-split-child">
          <zy-split-pane top="50%" direction="vertical">
            <template #top>
              Top
            </template>
            <template #bottom>
              Bottom
            </template>
          </zy-split-pane>
        </div>
      </template>
      <template #right>
        Right
      </template>
    </zy-split-pane>
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
.demo-split-child {
  height: 200px;
}
</style>
