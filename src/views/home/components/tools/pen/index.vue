<template>
  <span
    class="iconfont penicon"
    v-for='p in pens'
    :key='p.name'
    :class='p.name === setting.painter ? "is-active " + p.icon : p.icon'
    @click="setPainter(p.name)"
  ></span>
</template>

<script setup lang="ts">
import { inject } from 'vue'
const setting = inject('setting')
const pens = [
  { name: 'Pen', icon: 'icon-pen1' },
  // { name: 'Pencil', icon: 'icon-pen' },
  { name: 'MarkPen', icon: 'icon-mark-pen-fill' },
  { name: 'SoftPen', icon: 'icon-Brush-' },
  { name: 'Eraser', icon: 'icon-eraser' },
]
const setPainter = (painter: string) => {
  setting.painter = painter
}
</script>

<style scoped lang='scss'>
.penicon {
  color: #000;
}
.iconfont.penicon.is-active {
  color: #5af;
}
</style>