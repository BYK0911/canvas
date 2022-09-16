<template>
  <div class="panel">
    <div class="panel-header"> 最近使用 </div>
    <div class="panel-body">
      <div class='color-panel'>
        <div
          class='color-grid'
          v-for='c in colorUsed'
          :class='{ "is-active": c === colorValue }'
          :key='c'
          :style='{ backgroundColor: c }'
          @click='colorValue = c'
        ></div>
      </div>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"> 常用颜色 </div>
    <div class="panel-body">
      <div class='color-panel'>
        <div
          class='color-grid'
          v-for='c in colors'
          :class='{ "is-active": c === colorValue }'
          :key='c'
          :style='{ backgroundColor: c }'
          @click='colorValue = c'
        ></div>
      </div>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"> 全部颜色 </div>
    <div class="panel-body">
      <el-color-picker v-model="colorValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, inject } from 'vue'

const props = defineProps(['color', 'colorUsed'])
const emit = defineEmits(['update:color', 'update:colorUsed'])
const colorValue = ref(props.color)
const colorUsed = ref(props.colorUsed)
const closeDrawer = inject('closeDrawer')

let colors = []
const hex = (n: number): string => {
  const h = n.toString(16);
  return h.length < 2 ? `${h}${h}` : h
}
const n = 64
for (let r = 0; r <= 255; r += n) {
  for (let g = 0; g <= 255; g += n) {
    for (let b = 0; b <= 255; b += n) {
      colors.push(`#${hex(r)}${hex(g)}${hex(b)}`)
    }
  }
}

watch(colorValue, (v: string) => {
  if (colorUsed.value.includes(v)) {
    const i = colorUsed.value.indexOf(v)
    colorUsed.value.splice(i, 1)
  } else if (colorUsed.value.length === 10) {
    colorUsed.value.pop()
  }
  
  colorUsed.value.unshift(v)
  emit('update:color', v)
  emit('update:colorUsed', colorUsed.value)
  closeDrawer()
})
</script>

<style scoped lang='scss'>
.color-panel {
  display: flex;
  flex-wrap: wrap;
}

.color-grid {
  width: 20px;
  height: 20px;
  border: 1px solid #ddd;
  margin: 4px;
}
.color-grid.is-active {
  box-shadow: 0 0 5px #888;
}
</style>