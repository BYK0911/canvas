<template>
  <el-dropdown placement="top">
    <span class="iconfont icon-menu"></span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item><background/></el-dropdown-item>
        <el-dropdown-item><reset-viewport/></el-dropdown-item>
        <el-dropdown-item><export/></el-dropdown-item>
        <el-dropdown-item divided><clear/></el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import Clear from '../clear/index.vue'
import Export from '../export/index.vue'
import Background from '../background/index.vue';
import ResetViewport from '../resetViewport/index.vue';
</script>

<style scoped lang='scss'>

</style>