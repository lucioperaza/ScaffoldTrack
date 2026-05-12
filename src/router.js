import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import { useAuthStore } from './stores/auth'

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
    meta: { requiresAuth: true },
  },
  {
    path: '/ScaffoldList',
    name: 'scaffoldList',
    component: () => import('@/views/ScaffoldList.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/EditScaffold/:id',
    name: 'editScaffold',
    component: () => import('@/views/EditScaffold.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/ModifyScaffold/:id',
    name: 'modifyScaffold',
    component: () => import('@/views/ModifyScaffold.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterPage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
export default router
