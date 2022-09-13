<template>
  <span class="iconfont icon-pen" @click="openDrawer(Drawer)"></span>
</template>

<script setup lang="ts">
import Drawer from './drawer/index.vue'
import { inject } from 'vue'

const openDrawer = inject('openDrawer') as (drawer: unknown) => void
</script>

<style scoped lang='scss'>

</style>