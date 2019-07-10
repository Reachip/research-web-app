import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Table from '@/components/pages/Table'
import Developer from '@/components/pages/Developer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      component: Index,
    },

    {
      path: '/table/:id',
      props: true,
      name: 'Tableaux',
      component: Table
    },

    {
      path: '/table',
      props: true,
      name: 'Tableaux',
      component: Table
    },

    {
      path: '/developer',
      props: true,
      name: 'Developer',
      component: Developer
    }
  ]
})
