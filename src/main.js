import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vant from 'vant'
import 'vant/lib/index.css'
import  './assets/iconfont/iconfont.css'
import VueCookies from 'vue-cookies'
<<<<<<< HEAD
import http from 'vue-resource'

Vue.use(http)
=======



axios.defaults.headers.common['token'] = 'iTxOQNwMZvG6zH8k5g4TwzoqXvWWfPLHxtsuxDT7BvfTcjpffVeOcHA1P88VmVpa';
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0

Vue.use(VueCookies)


Vue.prototype.$axios=axios

Vue.use(vant)

Vue.config.productionTip = false

<<<<<<< HEAD
axios.defaults.headers.common['token'] =VueCookies.get('wxtoken');//给所有请求头设置token
// axios.defaults.headers.common['token']='dWQLjFzlPUqqP62qHSnKvu16BZUl1lVvh5ZyJ3cNZSaE33UyZX8y5mS7c5cudoe9'

=======
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
