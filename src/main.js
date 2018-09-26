import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Progress } from 'muse-ui'
import Helpers from 'muse-ui/lib/Helpers'
// import 'muse-ui/lib/styles/theme.less'

Vue.use(Progress)

window.$progress = Progress

Vue.use(Helpers)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})
