/*
 * @Author: LHL
 * @LastEditors: LHL
 * @LastEditTime: 2023-07-25 09:42:57
 */
import ZyTabs from "./ZyTabs.vue"

import type { App } from 'vue'
ZyTabs.install = (app: App): void => {
  app.component(ZyTabs.name, ZyTabs)
}

export default ZyTabs
