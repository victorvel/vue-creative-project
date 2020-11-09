import Vue from 'vue'
import App from './App.vue'
import router from './router'
import classData from '../class-data.js'

let data = {
  classes: classData,
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
