import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vant from 'vant'
import 'vant/lib/index.css'
import  './assets/iconfont/iconfont.css'
import VueCookies from 'vue-cookies'
import http from 'vue-resource'

Vue.use(http)

Vue.use(VueCookies)


Vue.prototype.$axios=axios

Vue.use(vant)

Vue.config.productionTip = false

axios.defaults.headers.common['token'] =VueCookies.get('wxtoken');//给所有请求头设置token
// axios.defaults.headers.common['token']='dWQLjFzlPUqqP62qHSnKvu16BZUl1lVvh5ZyJ3cNZSaE33UyZX8y5mS7c5cudoe9'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
