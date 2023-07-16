<template>
  <span class="iconfont icon-Undo" @click='undo'></span>
</template>

<script setup lang="ts">
import { memo } from '../../..'
const undo = () => memo.undo()
</script>

<style scoped lang='scss'>

</style>