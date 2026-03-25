import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'disclaimer',
    component: () => import('../views/DisclaimerBox.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
