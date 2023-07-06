<template>
  <template
    v-for='(p, i) in pens'
    :key='i'
  >
    <span class="tool-divider" v-if="p.name === 'divider'"></span>
    <span
      v-else
      class="iconfont"
      :class='p.name === setting.painter ? "is-active " + p.icon : p.icon'
      @click="setPainter(p.name)"
    ></span>

  </template>
</template>

<script setup lang="ts">
import { inject } from 'vue'
const setting = inject('setting')
const pens = [
  { name: 'Pen', icon: 'icon-pen1' },
  // { name: 'Pencil', icon: 'icon-pen' },
  // { name: 'MarkPen', icon: 'icon-mark-pen-fill' },
  // { name: 'SoftPen', icon: 'icon-Brush-' },
  { name: 'Eraser', icon: 'icon-eraser' },
]
const setPainter = (painter: string) => {
  setting.painter = painter
}
</script>

<style scoped lang='scss'>
.tool-divider {
  display: inline-block;
  align-self: center;
  width: 1px;
  height: 20px;
  background-color: #ddd;
  margin: 0 10px;
}
</style>