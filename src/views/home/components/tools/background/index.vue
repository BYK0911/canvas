<template>
  <span @click='openDrawer(Drawer)'>
    <span class="iconfont icon-background-f"></span> 背景颜色
  </span>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Drawer from './drawer/index.vue'

const openDrawer = inject('openDrawer')
</script>

<style scoped lang='scss'>

</style>