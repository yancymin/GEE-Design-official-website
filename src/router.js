import Vue from 'vue'
import Router from 'vue-router'
import Article from './views/Article.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/article',
      component: Article
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/brand',
      name: 'brand',
      component: () => import('./views/Brand.vue')
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
    },
    {
      path: '/article/2019-5-23',
      component: () => import('./article/2019-5-23/content.vue')
    },
    {
      path: '/article/2019-11-06',
      component: () => import('./article/2019-11-06/content.vue')
    }
  ]
})
