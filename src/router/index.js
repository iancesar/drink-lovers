import Vue from 'vue'
import VueRouter from 'vue-router'
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
    //Home
    path: '/:search',
    name: 'Home Search',
    component: Home
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
