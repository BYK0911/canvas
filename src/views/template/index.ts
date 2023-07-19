import { reactive } from 'vue'
import { Canvas, Memo } from '@/modules/canvas'

const cvs = new Canvas()
const memo = new Memo(cvs)
const setting = reactive({
  mode: 'pen',
  buket: false,
  pen: {
    color: '#000',
    size: 1,
  },
  eraser: {
    size: 1,
    force: 1
  }
})

export { cvs, memo, setting }