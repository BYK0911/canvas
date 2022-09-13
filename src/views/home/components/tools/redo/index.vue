<template>
  <span class="iconfont icon-Redo" @click='redo'></span>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const cvs = inject('cvs')
const setting = inject('setting')
const redo = () => {
  if (setting.index === setting.his.length - 1) return
  setting.index++
  cvs.layers = setting.his.slice(0, setting.index + 1)
}
</script>

<style scoped lang='scss'>

</style>