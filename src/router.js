import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Brand from './views/Brand.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      redirect: Brand,
      component: Home,
      children: [
        {
          path: '/brand',
          name: 'brand',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
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
    }]
})
