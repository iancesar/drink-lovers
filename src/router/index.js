import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/templates/Main'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DrinkInfo from '../views/DrinkInfo.vue'
import Favorites from '@/views/Favorites.vue'

Vue.use(VueRouter)

const routes = [
  {
    //Login
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    //Home
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/:search',
        name: 'Search',
        component: Home
      },
      {
        path: '/drink/:id',
        component: DrinkInfo
      },
      {
        path: '/favorites/drinks',
        component: Favorites
      }
    ]
  }
  // {
  //   //Home with search
  //   path: '/:search',
  //   name: 'Home Search',
  //   component: Home
  // },
  // {
  //   //Drink info
  //   path: '/drink/:id',
  //   name: 'Drink',
  //   component: DrinkInfo
  // }
]

const router = new VueRouter({
  routes
})

export default router
