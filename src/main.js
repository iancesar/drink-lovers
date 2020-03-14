import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
// import SocialSharing from 'vue-social-sharing'
var SocialSharing = require('vue-social-sharing');

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  vuetify,
  SocialSharing,
  // SocialSharing,
  render: h => h(App)
}).$mount('#app')
