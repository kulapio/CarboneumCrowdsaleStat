import Vue from 'vue'
import Router from 'vue-router'
import CrowdsaleStat from '@/components/CrowdsaleStat'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CrowdsaleStat',
      component: CrowdsaleStat
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})
