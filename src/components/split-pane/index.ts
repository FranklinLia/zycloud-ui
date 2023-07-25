import ZySplitPane from './ZySplitPane.vue';

import type { App } from 'vue'
ZySplitPane.install = (app: App): void => {
  app.component(ZySplitPane.name, ZySplitPane);
};

export default ZySplitPane;
