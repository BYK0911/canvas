<template>
  <span @click='resetViewport'>
    <span class="iconfont icon-marquee"></span> 重置视口
  </span>
</template>

<script setup lang="ts">
import { inject } from 'vue'
const cvs = inject('cvs')
const resetViewport = (): void => {
  cvs.x = 0
  cvs.y = 0
  cvs.scale = 1
  cvs.rotation = 0
}
</script>

<style scoped lang='scss'>

</style>