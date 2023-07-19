<template>
<div class="wrap">
  <div class="item" v-for="item in list" :key="item.name" @click="to(item.route)">
    <i class="item-icon iconfont" :class="item.icon"></i>
    <div class="label"> {{ item.label }} </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const list = [
  { name: 'sketch', route: '/canvas', label: '涂鸦', icon: 'icon-pen1' },
  { name: 'fill', route: '/fill', label: '填色', icon: 'icon-brush' },
]
const to = (path: string) => router.push({ path })
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.item {
  width: 120px;
  height: 120px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
}
.item-icon {
  font-size: 50px;
  line-height: 80px;
  font-weight: bold;
  color: #5af;
}

.label {
  font-size: 16px;
  line-height: 40px;
}
</style>