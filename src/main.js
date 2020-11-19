import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import msToMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'

import routes from '@/routes'
import store from '@/store'

import eventBus from '@/plugins/event-bus'

Vue.use(VueRouter)
Vue.use(eventBus)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

// Vue.config.productionTip = false

new Vue({
  render: h => h(App), router, store
}).$mount('#app')
