import { createRouter, createWebHistory } from 'vue-router'
import ServicesVue from '../views/ServicesVue.vue'
import HomeView from '../views/HomeView.vue'
import MaintenanceView from '../views/MaintenanceView.vue'
import SignupView from '../views/SignupView.vue'
const routes = [
  {
    path:'/services',
    name:'services',
    component:ServicesVue
  },
  {
    path:'/home',
    name:'home',
    component:HomeView
  },
  {
    path:'/maintenance',
    name:'maintenance',
    component:MaintenanceView
  },
  {
    path:'/sign-up',
    name:'signup',
    component:SignupView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
