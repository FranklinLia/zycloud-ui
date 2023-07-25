/*
 * @Author: LHL
 * @LastEditors: LHL
 * @LastEditTime : Do not edit
 */
import PackageJSON from "../package.json"

import type {App} from 'vue'
import {GlobalConfig, provideGlobalConfig} from "@/hooks";

const components = import.meta.globEager('@/components/*/index.ts');

const install = (app: App, config: GlobalConfig): void => {
  Object.keys(components).forEach(key => {
    let component = components[key].default;
    app.use(component)
  })
  provideGlobalConfig(config)
}

const plugin = {
  name: "ZyCloudUI",
  version: PackageJSON.version,
  install,
}

export default plugin
