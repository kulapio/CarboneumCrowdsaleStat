import Vue from 'vue'
import Router from 'vue-router'
import CrowdsaleStat from '@/components/CrowdsaleStat'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CrowdsaleStat',
      component: CrowdsaleStat
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
