<template>
  <div class="zy-search-bar">
    <div class="zy-search-bar__content">
      <zy-complex-search ref="complexRef" :components="components" @change="change" :size="configSize"
                         @close="closePopover">
        <slot name="complex"></slot>
      </zy-complex-search>
      <zy-search-conditions :conditions="conditions" :size="configSize" @change="change" v-if="showComplex"/>
      <zy-quick-search :size="configSize" :use-icon="!showComplex" :placeholder="placeholder" v-model="quick"
                       @change="exec" v-if="useQuickSearch"/>
    </div>
    <div class="zy-search-bar__buttons">
      <slot name="buttons">
        <zy-search-bar-button icon="Close" @click="clean" :size="configSize" :tooltip="t('fu.search_bar.clean')"
                              v-if="showClean"/>
        <zy-search-bar-button icon="Refresh" @click="refresh" :size="configSize" :tooltip="t('fu.search_bar.refresh')"
                              v-if="showRefresh"/>
        <slot></slot>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import ZyQuickSearch from "./ZyQuickSearch.vue";
import ZyComplexSearch from "./ZyComplexSearch.vue";
import ZySearchBarButton from "./ZySearchBarButton.vue";
import ZySearchConditions from "./ZySearchContions.vue";
import {ComplexCondition, ReferenceContext, referenceKey} from "./types";
import {useLocale, useSizeProp, useSize} from "@/hooks";
import {computed, provide, ref} from "vue";

defineOptions({name: "ZySearchBar"});

const props = defineProps({
  size: useSizeProp,
  quickKey: {
    type: String,
    default: "quick"
  },
  quickPlaceholder: String,
  useCleanButton: { // 是否使用清除按钮
    type: Boolean,
    default: true
  },
  useRefreshButton: { // 是否使用刷新按钮
    type: Boolean,
    default: false
  },
  useQuickSearch: { // 是否使用快速搜索
    type: Boolean,
    default: true
  },
  components: Array
})

const complexRef = ref<InstanceType<typeof ZyComplexSearch> | null>(null)
const quick = ref<string>("")
const conditions = ref<ComplexCondition[]>([])
const references = ref<ReferenceContext[]>([])

provide(referenceKey, references)

const configSize = useSize()

const placeholder = computed(() => {
  return props.quickPlaceholder ? props.quickPlaceholder : t('fu.search_bar.search')
})

const showComplex = computed(() => {
  return references.value.length > 0
})

const showClean = computed(() => {
  return props.useCleanButton && (conditions.value.length > 0 || quick.value)
})

const showRefresh = computed(() => {
  return props.useRefreshButton && showComplex.value
})

const condition = computed(() => {
  const obj: any = {}
  if (quick.value) {
    obj[props.quickKey] = quick.value
  }
  if (conditions.value?.length > 0) {
    conditions.value.forEach(c => {
      const {field, value} = c
      obj[c.field] = {field, value}
    })
  }

  return obj
})

const emit = defineEmits(['close', 'exec'])

const {t} = useLocale()

function closePopover() {
  emit("close")
}

function clean() {
  quick.value = ""
  conditions.value = []
  emit("exec", condition.value)
}

function change(ccs: ComplexCondition[]) {
  conditions.value = merge(conditions.value, ccs)
  exec()
}

function refresh() {
  complexRef.value?.close()
  exec()
}

function exec() {
  emit("exec", condition.value)
}

function merge(source: ComplexCondition[], target: ComplexCondition[]) {
  let conditions = source.concat(target)
  let conditionMap = new Map()

  for (let condition of conditions) {
    conditionMap.set(condition.field, condition)
  }
  let result: ComplexCondition[] = [];
  conditionMap.forEach(v => {
    result.push(v)
  })

  return result
}

function setConditions(conditionObj: any) {
  conditions.value = complexRef.value?.setConditions(conditionObj) || []
  if (props.useQuickSearch && conditionObj[props.quickKey] !== undefined) {
    quick.value = conditionObj[props.quickKey].value
    exec()
  } else {
    refresh()
  }
}

defineExpose({
  setConditions
})
</script>
