<template>
  <span class="iconfont icon-marquee" @click='resetViewport'></span>
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