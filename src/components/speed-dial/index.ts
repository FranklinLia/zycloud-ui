/*
 * @Author: LHL
 * @LastEditors: LHL
 * @LastEditTime : Do not edit
 */
import ZySpeedDial from "./ZySpeedDial.vue"
import ZySpeedDialItem from "./ZySpeedDialItem.vue"

import type { App } from 'vue'

ZySpeedDial.install = (app: App): void => {
  app.component(ZySpeedDial.name, ZySpeedDial)
  app.component(ZySpeedDialItem.name, ZySpeedDialItem)
}

export default ZySpeedDial;
