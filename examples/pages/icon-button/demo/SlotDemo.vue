<demo>插槽用法</demo>
<template>
  <div class="icon-buttons">
    <zy-icon-button @click="click">
      <img src="../../../assets/github.png" alt="" style="width: 20px"/>
    </zy-icon-button>
    <zy-icon-button @click="click">
      <el-icon color="#5005b9">
        <EditPen/>
      </el-icon>
    </zy-icon-button>
    <zy-icon-button @click="click" type="primary">
      <el-icon color="#5005b9" :size="20">
        <EditPen/>
      </el-icon>
    </zy-icon-button>
    <zy-icon-button @click="click" type="danger" disabled>
      <el-icon color="#5005b9" :size="24" @click="click">
        <EditPen/>
      </el-icon>
    </zy-icon-button>
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
