import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesMenuView from '@/views/ClientesMenuView.vue'
import EmpleadosView from '@/views/EmpleadosView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Clientes',
      name: 'Clientes',
      component: ClientesMenuView
    },
    {
      path: '/Empleados',
      name: 'Empleados',
      component: EmpleadosView
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
  ]
})

export default router
