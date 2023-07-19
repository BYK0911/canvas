import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import('../views/canvas/index')
  },
  {
    path: '/fill',
    name: 'Fill',
    component: () => import('../views/fill/index.vue')
  },
  {
    path: '/fill/canvas/:icon',
    name: 'FillCanvas',
    component: () => import('../views/fill/index')
  }
]
const router = createRouter({
  history: createWebHashHistory('/canvas/dist'),
  routes
})

export default router
