<script lang="ts">
import { defineComponent, h } from 'vue'
import ZyTableColumnSelectPopover from "./ZyTableColumnSelectPopover.vue";
import ZyTableColumnSelectDialog from "./ZyTableColumnSelectDialog.vue";

export default defineComponent({
    name: 'ZyTableColumnSelect',
    props: ["type"],
    setup(props, context) {
        const { type } = props
        return () => {
            if (type === "dialog") {
                return h(ZyTableColumnSelectDialog, context.attrs, context.slots)
            } else {
                return h(ZyTableColumnSelectPopover, context.attrs, context.slots)
            }
        }
    }

})
</script>

