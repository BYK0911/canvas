<template>
  <span style='color: red;' @click='clear'>
    <span class="iconfont icon-delete"></span> 清除屏幕
  </span>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const cvs = inject('cvs')
const setting = inject('setting')
const clear = () => {
  cvs.layers = []
  setting.his = []
  setting.index = -1
}
</script>

<style scoped lang='scss'>

</style>