<template>
  <span style='color: red;' @click='clear'>
    <span class="iconfont icon-delete"></span> 清除屏幕
  </span>
</template>

<script setup lang="ts">
import { memo, cvs } from '../../../index'
const clear = () => {
  cvs.layers = []
  memo.reset()
  cvs.refreshImage()
}
</script>

<style scoped lang='scss'>

</style>