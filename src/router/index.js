import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

import Index from '../views/Index.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/add-smoothie',
    name: 'AddSmoothie',
    component: () => import('../views/AddSmoothie.vue')
  },
  {
    path: '/edit-smoothie/:smoothie_slug',
    name: 'EditSmoothie',
    component: () => import('../views/EditSmoothie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
