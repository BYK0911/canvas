<template>
  <span style='color: red;' @click='clear'>
    <span class="iconfont icon-delete"></span> 清屏
  </span>
</template>

<script setup lang="ts">
import { inject } from 'vue'
console.log('// inject cvs')

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