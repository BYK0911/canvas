<template>
  <span class="iconfont icon-color-filling" @click='openDrawer(Drawer)'></span>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Drawer from './drawer'

const openDrawer = inject('openDrawer')
</script>