<template>
  <el-dropdown placement="top">
    <span class="iconfont icon-menu"></span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="showBg">
          <span class="iconfont icon-background-f"></span> 背景颜色
        </el-dropdown-item>
        <el-dropdown-item><reset-viewport/></el-dropdown-item>
        <el-dropdown-item><export/></el-dropdown-item>
        <el-dropdown-item divided><clear/></el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <span class="picker">
    <el-color-picker
      class="color-picker"
      ref="background"
      @change="setPredefined"
      v-model="cvs.backgroundColor"
      :predefine="predefine"
      show-alpha
    />
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Clear from '../clear/index.vue'
import Export from '../export/index.vue'
import ResetViewport from '../resetViewport/index.vue';
import { cvs } from '../../..'

const predefine = ref<string[]>([])
const setPredefined = (c: string) => {
  if (c === null) {
    c = cvs.backgroundColor = 'rgba(255,255,255, 1)'
  }

  if (predefine.value.includes(c)) return

  predefine.value.unshift(c)
}

const background = ref()
const showBg = () => {
  setTimeout(() => {
    background.value.show()
  }, 200)
}
</script>

<style scoped lang='scss'>
.picker {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
}
</style>