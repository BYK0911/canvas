<template>
  <div class="page-wrap flex-v">
    <tools :tools="tools"/>
    <div ref="cvsWrap" class="flex-main"></div>
  </div>

  <transition name="drawer">
    <div v-if="Drawer">
      <div class="modal" @click="closeDrawer"></div>
      <div class="drawer-wrap">
        <span class="closeicon iconfont icon-halfscreen" @click="closeDrawer"></span>
        <component :is="Drawer"></component>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeMount, provide, markRaw, VueElement } from 'vue'
import { cvs, memo, setting } from './index'
import Tools from './components/tools/index.vue'
import initEvent from './event'

defineProps(['tools'])
const cvsWrap = ref()
const Drawer = ref()
const closeDrawer = (): void => { Drawer.value = null }
let animateId: number | null = null

const render = () => {
  cvs.drawFrame()
  animateId = window.requestAnimationFrame(render)
}

provide('openDrawer', (drawer: VueElement) => Drawer.value = markRaw(drawer))
provide('closeDrawer', closeDrawer)
provide('cvs', cvs)
provide('setting', setting)
provide('memo', memo)

onMounted(() => {
  cvs.mount(cvsWrap.value)
  initEvent(cvs)
  render()
})

onBeforeMount(() => {
  if (animateId) window.cancelAnimationFrame(animateId)
  cvs.layers = []
  memo.reset()
})
</script>

<style scoped lang='scss'>
.page-wrap {
  width: 100%;
  height: 100%;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
}

.drawer-wrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  overflow: auto;
  padding: 10px;
  max-height: 80vh;
}
.lockicon {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 6px;
  opacity: .5;
  font-size: 20px;
}
.closeicon {
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 6px;
}
.log {
  position: fixed;
  top: 0;
  right: 0;
  width: 150px;
  padding: 0 10px;
  background: rgba(0, 0, 0, .5);
  color: #fff;
  font-size: 12px;
  max-height: 200px;
  overflow: auto;
  p {
    margin: 0;
    padding: 0;
    line-height: 20px;
  }
  .logicon {
    font-size: 12px;
  }
}
</style>

<style>
.drawer-enter-active .modal,
.drawer-leave-active .modal,
.drawer-enter-active .drawer-wrap,
.drawer-leave-active .drawer-wrap {
  transition: all 3s;
}
.drawer-enter .modal,
.drawer-leave-to .modal {
  opacity: 0;
}
.drawer-enter .drawer-wrap,
.drawer-leave-to .drawer-wrap {
  max-height: 80vh;
}
</style>.