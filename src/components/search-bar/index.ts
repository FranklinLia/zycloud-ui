import ZySearchBar from "./ZySearchBar.vue";
import ZyQuickSearch from "./ZyQuickSearch.vue";
import ZySearchBarButton from "./ZySearchBarButton.vue";
import ZyComplexSelect from "./complex-components/ZyComplexSelect.vue";
import ZyComplexInput from "./complex-components/ZyComplexInput.vue";
import ZyComplexDate from "./complex-components/ZyComplexDate.vue";
import ZyComplexDateTime from "./complex-components/ZyComplexDateTime.vue";
import type {App} from "vue";

ZySearchBar.install = (app: App): void => {
  app.component(ZyQuickSearch.name, ZyQuickSearch);
  app.component(ZySearchBar.name, ZySearchBar);
  app.component(ZySearchBarButton.name, ZySearchBarButton);
  app.component(ZyComplexSelect.name, ZyComplexSelect);
  app.component(ZyComplexInput.name, ZyComplexInput);
  app.component(ZyComplexDate.name, ZyComplexDate);
  app.component(ZyComplexDateTime.name, ZyComplexDateTime);
};

export default ZySearchBar;
