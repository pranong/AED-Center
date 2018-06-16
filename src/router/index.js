import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import imgInfo from '@/components/imgInfo'
import dashboard from '@/components/dashboard'
import addusr from '@/components/addusr'
import log from '@/components/log'

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
    },
    {
      path: '/addusr/',
      name: 'addusr',
      props: true,
      component: addusr
    },
    {
      path: '/log/',
      name: 'log',
      props: true,
      component: log
    }
  ]
})
