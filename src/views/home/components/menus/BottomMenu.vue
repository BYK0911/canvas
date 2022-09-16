<template>
  <div class="menu-bottom menu">
    <pen/>
    <color/>
    <size/>
  </div>
</template>

<script setup lang="ts">
import Pen from '../tools/pen/index.vue'
import Size from '../tools/size/index.vue'
import Color from '../tools/color/index.vue'
</script>

<style scoped lang='scss'>
.menu-bottom  {
  display: flex;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
<style>
.menu-bottom .el-icon,
.menu-bottom .iconfont {
  margin: 0 5px;
}
</style>