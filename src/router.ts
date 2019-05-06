import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home           from '@/components/Home.vue'
import About           from '@/components/About.vue'
import Animal         from '@/components/Animal/Animal.vue'
import AnimalList     from '@/components/Animal/Animal-list.vue'
import AnimalPersist  from '@/components/Animal/Animal-persist.vue'
import Shelter        from '@/components/Shelter/Shelter.vue'
import ShelterList    from '@/components/Shelter/Shelter-list.vue'
import ShelterPersist from '@/components/Shelter/Shelter-persist.vue'

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/animal',
      name: 'Animal',
      component: Animal,
      children: [
        {
          path: '',
          name: 'Animals',
          component: AnimalList
        },
        {
          path: 'persist',
          name: 'Add animal',
          component: AnimalPersist
        }
      ]
    },
    {
      path: '/shelter',
      name: 'Shelter',
      component: Shelter,
      children: [
        {
          path: '',
          name: 'Shelter',
          component: ShelterList
        },
        {
          path: 'persist',
          name: 'Add shelter',
          component: ShelterPersist
        }
      ]
    }
  ]
})
