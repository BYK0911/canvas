<template>
  <div class="menu-bottom menu">
    <pen/>
    <eraser/>
    <color/>
    <background/>
    <more/>
  </div>
</template>

<script setup lang="ts">
import Pen from '../tools/pen/index.vue'
import Eraser from '../tools/eraser/index.vue'
import Background from '../tools/background/index.vue'
import Color from '../tools/color/index.vue'
import More from '../tools/more/index.vue'
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