import Vue from 'vue'
import App from './App.vue'
import router from './router'

import utils from '@/utils/util'
import http from '@/api/data-http'

import './css/remove-default.css'
import './css/box.css'
import './css/dms-exclusive.css'
import './css/button.css'
import './css/flex.css'
import './css/badge.css'

import 'font-awesome/css/font-awesome.css'


Vue.config.productionTip = false
Vue.prototype.$utils = utils
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
