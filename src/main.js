import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import store from './store/store'
// import SocialSharing from 'vue-social-sharing'
var SocialSharing = require('vue-social-sharing');

Vue.config.productionTip = false;

var axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://ian-cocktail-api.herokuapp.com' : 'http://localhost:5000'
});

Vue.prototype.$axios = axiosInstance;

Vue.use(Notifications)

new Vue({
  router,
  vuetify,
  SocialSharing,
  store,
  render: h => h(App)
}).$mount('#app')
