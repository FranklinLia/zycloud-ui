import ZyReadWriteSwitch from "./ZyReadWriteSwitch.vue"
import ZyInputRwSwitch from "./ZyInputRwSwitch.vue"
import ZySelectRwSwitch from "./ZySelectRwSwitch.vue"

import type { App } from 'vue'

ZyReadWriteSwitch.install = (app: App): void => {
  app.component(ZyReadWriteSwitch.name, ZyReadWriteSwitch)
  app.component(ZyInputRwSwitch.name, ZyInputRwSwitch)
  app.component(ZySelectRwSwitch.name, ZySelectRwSwitch)
}

export default ZyReadWriteSwitch;
