<template>
  <color v-model:color='setting.color' v-model:colorUsed='setting.colorUsed'/>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Color from './color.vue'

const setting = inject('setting')
</script>