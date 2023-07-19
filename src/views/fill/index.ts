import { defineComponent, h, onMounted } from 'vue'
import Canvas from '../template/canvas.vue'
import { cvs } from '@/views/template/index'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup () {
    const route = useRoute()
    const icon = route.params.icon

    onMounted(() => {
      cvs.on('beforeRender', (ctx: any) => {
        const text = String.fromCharCode(+icon)
        const { width, height } = cvs
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.font = '200px ICON'
        ctx.fillStyle = '#ddd'
        ctx.fillText(text, width / 2, height / 2)
      })
    })

    return () => h(Canvas, {tools: ['Color', 'Undo', 'Redo', 'MoreOptions']})
  }
})