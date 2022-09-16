<template>
  <div class="menu-right menu">
    <undo/>
    <redo/>
    <more-options/>
  </div>
</template>

<script setup lang="ts">
import Undo from '../tools/undo/index.vue'
import Redo from '../tools/redo/index.vue'
import MoreOptions from '../tools/more/index.vue'
</script>

<style scoped lang='scss'>
.menu-right  {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  right: 10px;
  justify-content: center;
}
</style>
<style>
.menu-right .el-icon,
.menu-right .iconfont{
  margin: 5px 0;
}
</style>