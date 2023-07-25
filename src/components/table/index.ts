import ZyTable from "./ZyTable.vue"
import ZyTableColumnSelect from "./table-column-select/ZyTableColumnSelect.vue"
import ZyTablePagination from "./ZyTablePagination.vue"
import ZyTableOperations from "./table-operations/ZyTableOperations.vue";
import ZyTableButton from "./table-operations/ZyTableButton.vue";
import ZyTableMoreButton from "./table-operations/ZyTableMoreButton.vue";
import ZyTableColumnDropdown from "./ZyTableColumnDropdown.vue"

import type { App } from 'vue'
ZyTable.install = (app: App): void => {
  app.component(ZyTable.name, ZyTable);
  app.component(ZyTablePagination.name, ZyTablePagination)
  app.component(ZyTableColumnSelect.name, ZyTableColumnSelect);
  app.component(ZyTableColumnDropdown.name, ZyTableColumnDropdown)
  app.component(ZyTableOperations.name, ZyTableOperations);
  app.component(ZyTableButton.name, ZyTableButton);
  app.component(ZyTableMoreButton.name, ZyTableMoreButton);
};
export default ZyTable;
