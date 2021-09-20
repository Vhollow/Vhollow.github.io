import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/PruebaLanding.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    }
  ]
})
