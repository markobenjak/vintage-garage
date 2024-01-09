import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from '../App.vue'
import Tr from "../i18n/translations"

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/vintage-garage/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '/vintage-garage/',
          name: 'home',
          component: HomeView
        }
      ]
    }
  ]
})

export default router