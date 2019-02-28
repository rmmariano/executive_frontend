import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'

// import 'jquery'
// import Popper from 'popper.js'

// window.jQuery = window.$ = require('jquery')
// window.Popper = Popper

// (<any>window).Popper = Popper

// window.$ = window.jQuery = require('jquery')
// window.Popper = require('popper.js').default // pay attention to "default"

// window.$ = window.jQuery = require('jquery')

Vue.use(BootstrapVue)

// Vue.use({
//   install: function (Vue, options) {
//     Vue.prototype.$jQuery = require('jquery') // you'll have this.$jQuery anywhere in your vue project
//   }
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
