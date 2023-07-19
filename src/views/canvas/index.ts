import Canvas from '../template/canvas.vue'
import { defineComponent, h } from 'vue'

export default defineComponent({
  setup () {
    return () => h(Canvas, {tools: ['Pen', 'Size', 'Color', 'Undo', 'Redo', 'MoreOptions']})
  }
})