<template>
  <span class="iconfont icon-Redo" @click='redo'></span>
</template>

<script setup lang="ts">
import { memo } from '../../..'
const redo = () => memo.redo()
</script>

<style scoped lang='scss'>

</style>