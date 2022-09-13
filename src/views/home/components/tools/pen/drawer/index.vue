<template>
  <div class="panel">
    <div class="panel-header"> 类型 </div>
    <div class="panel-body">
      <span
        class="iconfont penicon"
        v-for='p in pens'
        :key='p.name'
        :class='p.name === setting.painter ? "is-active " + p.icon : p.icon'
        :style="{color: p.name === 'Chalk' ? '#aaa' : '#000' }"
        @click="setting.painter = p.name"
      ></span>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"> 粗细 </div>
    <div class="panel-body">
      <el-slider v-model="setting.painterSize" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const setting = inject('setting')
const pens = [
  { name: 'Pen', icon: 'icon-pen1' },
  { name: 'Pencil', icon: 'icon-pen' },
  { name: 'MarkPen', icon: 'icon-mark-pen-fill' },
  { name: 'SoftPen', icon: 'icon-Brush-' },
]
</script>

<style scoped lang='scss'>
.panel-body .iconfont{
  padding: 10px;
}
.penicon {
  font-size: 24px;
  display: inline-block;
}
.penicon.is-active {
  background: #f0f0f0;
}
</style>