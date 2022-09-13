<template>
  <span class="iconfont icon-Undo" @click='undo'></span>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const cvs = inject('cvs')
const setting = inject('setting')
const undo = () => {
  if (setting.index < 0) return
  cvs.layers = setting.his.slice(0, setting.index)
  setting.index--
}
</script>

<style scoped lang='scss'>

</style>