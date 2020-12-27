import Vue from 'vue'

import './plugins/plugins' //插件保存处

import App from './App.vue'
import './registerServiceWorker'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
