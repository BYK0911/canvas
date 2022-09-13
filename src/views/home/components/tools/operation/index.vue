<template>
  <el-dropdown placement="left">
    <span class="iconfont icon-s-operation"></span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item><export/></el-dropdown-item>
        <el-dropdown-item><clear/></el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import Clear from '../clear/index.vue'
import Export from '../export/index.vue'
</script>

<style scoped lang='scss'>

</style>