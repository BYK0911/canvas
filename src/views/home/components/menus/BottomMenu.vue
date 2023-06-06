<template>
  <div class="menu-bottom menu">
    <pen/>
    <span class="tool-divider"></span>
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
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
<style>
.menu-bottom .el-icon,
.menu-bottom .iconfont {
  margin: 0 5px;
}
.tool-divider {
  display: inline-block;
  align-self: center;
  width: 1px;
  height: 20px;
  background-color: #ddd;
  margin: 0 10px;
}
</style>