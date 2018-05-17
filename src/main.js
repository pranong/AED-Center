// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import './components/firebase'
import 'bootstrap/dist/css/bootstrap.css'
import jQuery from 'jQuery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueRouter from 'vue-router'
global.jQuery = jQuery
global.$ = jQuery
// let Bootstrap = require('bootstrap')
Vue.use(VueRouter)

// const routes = [
//   {Path: '/components/imgInfo', component: 'imgInfo'}
// ]

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// })

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC833ACqvQDf0YfbwsSqPiX2Am7zz1wxN0',
    libraries: 'places'
  }
})

Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
