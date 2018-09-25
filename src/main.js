import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueContentPlaceholders from 'vue-content-placeholders'

// Vue.use(VueContentPlaceholders)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})
