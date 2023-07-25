import ZyFilterInput from "./ZyFilterInput.vue";
import ZyFilterBar from "./ZyFilterBar.vue";
import ZyFilter from "./ZyFilter.vue";
import ZyFilterSelect from "./filter-components/ZyFilterSelect.vue";
import ZyFilterNormalSelect from "./filter-components/ZyFilterNormalSelect.vue";
import ZyFilterDate from "./filter-components/ZyFilterDate.vue";
import ZyFilterDateTime from "./filter-components/ZyFilterDateTime.vue";
import ZyFilterInputText from "./filter-components/ZyFilterInputText.vue";
import type {App} from "vue";

ZyFilterBar.install = (app: App): void => {
  app.component(ZyFilterBar.name, ZyFilterBar);
  app.component(ZyFilter.name, ZyFilter);
  app.component(ZyFilterInput.name, ZyFilterInput);
  app.component(ZyFilterSelect.name, ZyFilterSelect);
  app.component(ZyFilterNormalSelect.name, ZyFilterNormalSelect);
  app.component(ZyFilterDate.name, ZyFilterDate);
  app.component(ZyFilterDateTime.name, ZyFilterDateTime);
  app.component(ZyFilterInputText.name, ZyFilterInputText);
};

export default ZyFilterBar;
