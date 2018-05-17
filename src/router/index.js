import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import imgInfo from '@/components/imgInfo'
import dashboard from '@/components/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/imgInfo/',
      name: 'imgInfo',
      props: true,
      component: imgInfo
    }
  ]
})
