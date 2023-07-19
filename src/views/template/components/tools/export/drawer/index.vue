<template>
  <div>长按保存图片</div>
  <div class="img-wrap">
    <img :src='src' />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const cvs = inject('cvs')
const src = cvs.dom.toDataURL()
</script>

<style scoped lang="scss">
.img-wrap {
  padding: 20px;
  text-align: center;
  img {
    max-width: 80%;
  }
}
</style>