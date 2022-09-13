<template>
  <color v-model:color='cvs.backgroundColor' v-model:colorUsed='setting.backgroundColorUsed'/>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import Color from '../../color/drawer/color.vue'

const setting = inject('setting')
const cvs = inject('cvs')
</script>