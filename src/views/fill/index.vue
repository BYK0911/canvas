<template>
  <div class="page">
    <div class='group' v-for="g in groups" :key="g.name">
      <div class="group-label"> {{ g.label }} </div>
      <div class="img-wrap">
        <span class="img-icon" v-for="ic in g.icons" :key="ic.icon_id" @click="to(ic)">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#ic-' + ic.font_class"></use>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import glyphs from './icons'

interface Icon {
  "icon_id": string,
  "name": string,
  "font_class": string,
  "unicode": string,
  "unicode_decimal": number
}

const router = useRouter()
const groups = [
  { name: 'animal', icons: [0, 40], label: '动物' },
  { name: 'clothes', icons: [41, 59], label: '衣服' },
  { name: 'fruit', icons: [60, 108], label: '水果' },
  { name: 'vegetable', icons: [109, 129], label: '蔬菜' },
  { name: 'hulman', icons: [130, 198], label: '人物' },
  { name: 'elc', icons: [199, 211], label: '电器' },
].map(g => {
  const icons: Icon[] = []
  for (let i = g.icons[0]; i <= g.icons[1]; i++) {
    icons.push(glyphs[i])
  }
  return { ...g, icons }
})

const to = (ic: Icon) => router.push({ name: 'FillCanvas', params: { icon: ic.font_class } })
</script>

<style scoped lang="scss">
.page {
  height: 100%;
  overflow-y: auto;
}
.group {
  padding: 10px;
}
.group-label {
  font-weight: bold;
  padding: 5px 0;
}
.img-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 30px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.img-icon {
  display: inline-block;
  color: #999;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>