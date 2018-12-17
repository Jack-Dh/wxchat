import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vant from 'vant'
import 'vant/lib/index.css'
import  './assets/iconfont/iconfont.css'
import VueCookies from 'vue-cookies'



axios.defaults.headers.common['token'] = 'oXVhPFHctMnkBzfKzi5K4YVwwcYnaH3A2GBndMzRB6mU4nPZJVsmiTLY9QB4MGlb';

Vue.use(VueCookies)


Vue.prototype.$axios=axios

Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
