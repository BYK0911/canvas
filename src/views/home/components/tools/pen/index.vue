<template>
  <template
    v-for='(p, i) in pens'
    :key='i'
  >
    <span
      class="iconfont"
      :class='p.name === setting.mode ? "is-active " + p.icon : p.icon'
      @click="setPainter(p.name)"
    ></span>

  </template>
</template>

<script setup lang="ts">
import { setting } from '../../../index'
const pens = [
  { name: 'pen', icon: 'icon-pen1' },
  { name: 'eraser', icon: 'icon-eraser' },
]
const setPainter = (painter: string) => {
  setting.mode = painter
}
</script>