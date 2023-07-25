import ZyIconButton from "./ZyIconButton.vue"

import type {App} from 'vue'

ZyIconButton.install = (app: App): void => {
  app.component(ZyIconButton.name, ZyIconButton)
}

export default ZyIconButton;
