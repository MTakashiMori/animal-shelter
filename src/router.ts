import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/Home.vue'
import Animal from '@/components/Animal.vue'
import Shelter from '@/components/Shelter.vue'

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/animal',
      name: 'Animals',
      component: Animal
    },
    {
      path: '/shelter',
      name: 'Shelter',
      component: Shelter
    }
  ]
})
