<template>
  <div class="panel">
    <div class="panel-header"> 粗细 </div>
    <div class="panel-body">
      <div class="size-wrap flex">
        <span class="size" v-for="s in sizes" :key="s" @click="setting.painterSize=s">
          <span
            class="size-inner"
            :style="{
              width: s + 'px',
              height: s + 'px',
            }"
          ></span>
        </span>
      </div>
    </div>
    <div class="panel-body">
      <el-slider v-model="setting.painterSize" :min='1' :max='50' />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const sizes = [1, 5, 10, 15, 20, 25]
const setting = inject('setting')
</script>

<style scoped lang="scss">
  .size-wrap {
    padding: 10px;
    align-items: center;
  }
  .size {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    box-shadow: 0 0 5px #ddd;
    border-radius: 50%;
  }
  .size-inner {
    background-color: #000;
    border-radius: 50%;
  }
</style>