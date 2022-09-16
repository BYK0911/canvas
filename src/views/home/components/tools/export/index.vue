<template>
  <span @click="download">
    <span class="iconfont icon-download"></span> 导出图片
  </span>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const cvs = inject('cvs')
const download = () => {
  const a = document.createElement('a')
  a.download = Date.now() + '.png'
  a.href = cvs.dom.toDataURL()
  const e = new MouseEvent('click')
  a.dispatchEvent(e)
}
</script>

<style scoped lang='scss'>

</style>