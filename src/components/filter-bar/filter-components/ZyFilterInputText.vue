<template>
  <div class="zy-filter-component">
    <div class="zy-filter-component__label">{{ label }}</div>
    <div class="zy-filter-component__content">
      <el-input class="zy-filter-input-text" v-model="value" v-bind="$attrs" :size="configSize"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, inject} from "vue";
import {FilterCondition, ReferenceContext, referenceKey} from "../types";
import {dateFormat} from "@/tools/time";
import {useLocale, useSize} from "@/hooks"
import {validateSize} from "@/tools/size";

defineOptions({name: "ZyFilterInputText"});

const props = defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  label: String,
  field: {
    type: String,
    required: true
  },
})
const value = ref('')
const configSize = useSize()

const {t} = useLocale()

function getCondition(): FilterCondition | undefined {
  if (!String(value.value)) return;
  let {field, label} = props
  return {field, label, value: value.value, valueLabel: value.value}
}

function init(v: any) {
  value.value = v !== undefined ? v : ''
}

const references = inject(referenceKey)
const field = props.field
const reference: ReferenceContext = {field, init, getCondition}
references?.value.push(reference)

defineExpose({
  getCondition,
  init
})
</script>
