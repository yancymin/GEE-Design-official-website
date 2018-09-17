import Vue from 'vue'
import Router from 'vue-router'
import Brand from './views/Brand.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/brand'
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    },
    {
      path: '/make',
      name: 'make',
      component: () => import('./views/Make.vue')
    },
    {
      path: '/interface',
      name: 'interface',
      component: () => import('./views/Interface.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/resource',
      name: 'resource',
      component: () => import('./views/Resource.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
