import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DrinkInfo from '../views/DrinkInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drink',
    name: 'Drink',
    component: DrinkInfo
  }
]

const router = new VueRouter({
  routes
})

export default router
