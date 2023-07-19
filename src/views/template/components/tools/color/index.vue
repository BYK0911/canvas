<template>
<span @touchstart="drag">
  <el-color-picker
    class="color-picker"
    v-model="setting.pen.color"
    @change="setPredefined"
    show-alpha
    :predefine="predefined"
  />
</span>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { cvs, setting } from '../../../index'
const predefined = ref<string[]>([])
const setPredefined = (c: string) => {
  if (c === null) {
    c = setting.pen.color = 'rgba(0, 0, 0, 1)'
  }

  if (predefined.value.includes(c)) return

  predefined.value.unshift(c)
}

const drag = (e: TouchEvent) => {
  if (e.touches.length > 1) return
  let x = e.touches[0].pageX
  let y = e.touches[0].pageY

  const drag = (e: TouchEvent) => {
    x = e.touches[0].pageX
    y = e.touches[0].pageY
  }

  const dragend = (): void => {
    window.removeEventListener('touchend', dragend)
    window.removeEventListener('touchmove', drag)

    if (document.elementFromPoint(x, y) === cvs.dom) {
      cvs.emit('drop', { x, y })
    }
  }

  window.addEventListener('touchmove', drag)
  window.addEventListener('touchend', dragend)
}
</script>