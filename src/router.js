import Vue from 'vue'
import Router from 'vue-router'
import Brand from './views/Brand.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
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
      path: '/product',
      name: 'product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/interface',
      name: 'interface',
      component: () => import('./views/Interface.vue')
    },

    {
      path: '/download',
      name: 'download',
      component: () => import('./views/Download.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
