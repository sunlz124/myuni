import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
import {router,RouterMount} from './router/router.js'  //路径换成自己的
Vue.use(router)

App.mpType = 'app'
const app = new Vue({
    ...App
})
RouterMount(app,router,'#app')
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif