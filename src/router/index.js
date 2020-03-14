import Vue from 'vue'
import VueRouter from 'vue-router'
import Drinks from '../views/Drinks.vue'
import Home from '../views/Home.vue'
import DrinkInfo from '../views/DrinkInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    //Home
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    //List of drinks
    path: '/drinks/:search',
    name: 'Drinks',
    component: Drinks
  },
  {
    //Drink info
    path: '/drink/:id',
    name: 'Drink',
    component: DrinkInfo
  }
]

const router = new VueRouter({
  routes
})

export default router
