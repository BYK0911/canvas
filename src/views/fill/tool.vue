<template>
  <div class="menu">
    <pen/>
    <size/>
    <color/>
    <undo/>
    <redo/>
    <more-options/>
  </div>
</template>

<script setup lang="ts">
import Color from '@/views/canvas/components/tools/color/index.vue'
import Undo from '@/views/canvas/components/tools/undo/index.vue'
import Redo from '@/views/canvas/components/tools/redo/index.vue'
import MoreOptions from '@/views/canvas/components/tools/more/index.vue'
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