<template>
  <div ref="cvsWrap" class="cvs-wrap"></div>

  <bottom-menu v-show="!locked"/>
  <right-menu v-show="!locked"/>

  <span class="iconfont lockicon" :class="locked ? 'icon-lock' : 'icon-unlock-f'" @click="locked = !locked"></span>

  <transition name="drawer">
    <div v-if="Drawer">
      <div class="modal" @click="closeDrawer"></div>
      <div class="drawer-wrap">
        <span class="closeicon iconfont icon-halfscreen" @click="closeDrawer"></span>
        <component :is="Drawer"></component>
      </div>
    </div>
  </transition>

  <div ref='logRef' class='log' @click='expandLog=!expandLog'>
    <div v-show='expandLog'>
      <p v-for='(log, i) in logs' :key='i'> {{log}} </p>
    </div>
    <p style='text-align: center;'>
      <span class='iconfont logicon' :class='expandLog ? "icon-halfscreen": "icon-fullscreen"'></span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeMount, provide, markRaw, watch, nextTick } from 'vue'
import Canvas from '@/modules/canvas'
import BottomMenu from './components/menus/BottomMenu.vue'
import RightMenu from './components/menus/RightMenu.vue'
import { logs } from './log'
import initEvent from './event'
import setting from './setting'

const cvsWrap = ref()
const logRef = ref()
const Drawer = ref()
const locked = ref(false)
const closeDrawer = (): void => { Drawer.value = null }
const cvs = new Canvas()
const expandLog = ref(false)
let animateId = null

const render = () => {
  cvs.drawFrame()
  animateId = window.requestAnimationFrame(render)
}

provide(
  'openDrawer',
  (drawer: unknown): void => {
    Drawer.value = markRaw(drawer)
  }
)
provide('closeDrawer', closeDrawer)
provide('cvs', cvs)
provide('setting', setting)

onMounted(() => {
  cvs.mount(cvsWrap.value)
  initEvent(cvs)
  render()
})

onBeforeMount(() => {
  window.cancelAnimationFrame(animateId)
})

watch([logs.value, expandLog], () => {
  nextTick(() => {
    logRef.value.scrollTop = 9999999
  });
})
</script>

<style scoped lang='scss'>
.cvs-wrap {
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
</style>