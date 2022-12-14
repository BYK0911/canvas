import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  }
]
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/canvas/dist'),
  routes
})

export default router
