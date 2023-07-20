import { defineComponent, h, onBeforeUnmount, onMounted } from 'vue'
import Canvas from '../template/canvas.vue'
import { cvs } from '@/views/template/index'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup () {
    const route = useRoute()
    const symbols = document.querySelectorAll('symbol');
    const img = new Image()
    const symbolId = 'ic-' + route.params.icon
    const symbol = Array.from(symbols).find(symbol => symbol.id === symbolId);
    let loaded = false
    if (symbol) {
      let svgData = new XMLSerializer().serializeToString(symbol);
      svgData = svgData.replaceAll('symbol', 'svg')
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      img.src = URL.createObjectURL(svgBlob);
      img.onload = () => loaded = true
    }
  
    const drawIcon = (ctx: any) => {
      if (loaded) {
        const { width, height } = cvs
        ctx.save()
        ctx.globalAlpha = 0.2
        ctx.imageSmoothingEnabled = false
        ctx.drawImage(img, width / 2 - 100, height / 2 - 100, 200, 200)
        ctx.restore()
      }
    }

    onMounted(() => {
      cvs.on('beforeRender', drawIcon)
    })
    onBeforeUnmount(() => {
      cvs.off('beforeRender', drawIcon)
    })

    return () => h(Canvas, {tools: ['Color', 'Undo', 'Redo', 'MoreOptions']})
  }
})