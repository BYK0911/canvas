<template>
  <div class="menu">
    <pen/>
    <span class="tool-divider"></span>
    <color/>
    <size/>
    <undo/>
    <redo/>
    <more-options/>
  </div>
</template>

<script setup lang="ts">
import Pen from '../tools/pen/index.vue'
import Size from '../tools/size/index.vue'
import Color from '../tools/color/index.vue'
import Undo from '../tools/undo/index.vue'
import Redo from '../tools/redo/index.vue'
import MoreOptions from '../tools/more/index.vue'
</script>

<style scoped lang='scss'>
.menu  {
  display: flex;
  height: 45px;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #333;
  border-bottom: 1px solid #ddd;
}
.tool-divider {
  display: inline-block;
  align-self: center;
  width: 1px;
  height: 20px;
  background-color: #fff;
  margin: 0 10px;
}
</style>
<style>
.menu .el-icon,
.menu .iconfont{
  margin: 0 5px;
}

</style>