<template>
  <div class="zy-filter-bar">
    <div class="zy-filter-bar__top">
      <div class="top_left">
        <slot name="tl"></slot>
      </div>
      <div class="top_right">
        <slot name="tr" :condition="conditionObj">
          <zy-filter-input :size="configSize" v-model="quick" :placeholder="quickPlaceholder" @change="change"/>
        </slot>
        <el-button class="zy-filter-button" @click="open" icon="Filter" :size="configSize">{{ t('zy.filter_bar.filter') }}
          <span v-if="conditions.length > 0">({{ conditions.length }})</span>
        </el-button>

        <slot name="buttons"></slot>
      </div>
    </div>
    <div class="zy-filter-bar__bottom">
      <zy-filter ref="filterRef" @filter="filter" :count="resultCount" :components="components" :size="configSize"
                 :show-empty="showEmpty">
        <slot></slot>
      </zy-filter>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from "vue";
import {useLocale, useSize} from "@/hooks"
import {validateSize} from "@/tools/size";
import ZyFilterInput from "@/components/filter-bar/ZyFilterInput.vue";
import ZyFilter from "@/components/filter-bar/ZyFilter.vue";

defineOptions({name: "ZyFilterBar"});
const {t} = useLocale()
defineProps({
  size: {
    type: String,
    validator: validateSize
  },
  resultCount: Number,
  quickPlaceholder: String,
  components: Array,
  showEmpty: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(["exec"])

const configSize = useSize()
const quick = ref("")
const conditions = ref([])
const filterRef = ref()

function open() {
  filterRef.value?.open()
}

function change() {
  emit("exec", conditionObj.value)
}

function filter(c: any) {
  conditions.value = c
  emit("exec", conditionObj.value)
}

function setConditions(conditionObj: any) {
  if (conditionObj.quick) {
    quick.value = conditionObj.quick
  }
  filterRef.value?.setConditions(conditionObj)
}

const conditionObj = computed(() => {
  let obj: any = {}
  if (quick.value) {
    obj.quick = quick.value
  }
  conditions.value.forEach((c: any) => {
    obj[c.field] = c
  })
  return obj
});

defineExpose({
  setConditions,
  open
})
</script>
