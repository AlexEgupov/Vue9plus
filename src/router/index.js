import Vue from 'vue'
import VueRouter from 'vue-router'

import mainPageView from '../views/mainPageView.vue'
import singlePageView from '../views/singlePageView'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: mainPageView },
  { name: 'single', path: '/single-page/:id', component: singlePageView },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
