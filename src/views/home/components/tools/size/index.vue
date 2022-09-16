<template>
  <span class="iconfont" @click="openDrawer(Drawer)">
    <span class="sizeicon"></span>
  </span>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Drawer from './drawer/index.vue'

const openDrawer = inject('openDrawer')
</script>

<style scoped lang='scss'>
.sizeicon {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #666;
}
</style>