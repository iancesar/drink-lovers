import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import store from './store/store'
import firebaseConfig from './firebase-config'
import firebase from 'firebase/app'
import 'firebase/auth';

var SocialSharing = require('vue-social-sharing');

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

firebase.initializeApp(firebaseConfig);

Vue.use(Notifications)

new Vue({
  router,
  vuetify,
  SocialSharing,
  store,
  render: h => h(App)
}).$mount('#app')
