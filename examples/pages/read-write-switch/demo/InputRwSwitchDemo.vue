<demo>InputRwSwitch</demo>
<template>
  <zy-input-rw-switch v-model="input" placeholder="单击填写" />
</template>

<script setup lang="ts">
import { ref } from "vue"
const input = ref("单击填写")
</script>
