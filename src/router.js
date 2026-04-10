import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/AddScaffold',
    name: 'addScaffold',
    component: () => import('@/views/AddScaffold.vue'),
  },
  {
    path: '/ScaffoldList',
    name: 'scaffoldList',
    component: () => import('@/views/ScaffoldList.vue'),
  },
  {
    path: '/EditScaffold/:id',
    name: 'editScaffold',
    component: () => import('@/views/EditScaffold.vue'),
  },
  {
    path: '/ModifyScaffold/:id',
    name: 'modifyScaffold',
    component: () => import('@/views/ModifyScaffold.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
