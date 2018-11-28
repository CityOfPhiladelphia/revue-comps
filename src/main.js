import '@cityofphiladelphia/phila-app-css/dist/css/phila-app.min.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

import router from './routes.js'
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
