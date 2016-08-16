import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import routers from './routers'
import * as filters from './filters'

Object.keys(filters).forEach(function(k) {
  Vue.filter(k, filters[k]);
});

Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
  // hashbang: true,
  // history: true,
  // saveScorllPostion: true,
})

routers(router)
router.start(App, 'app')