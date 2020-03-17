import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/templates/Main'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import DrinkInfo from '../views/DrinkInfo.vue'

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
    name: 'Home',
    component: Main,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/:search',
        component: Home
      },
      {
        path: '/drink/:id',
        component: DrinkInfo
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
