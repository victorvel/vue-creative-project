import Vue from 'vue'
import App from './App.vue'
import router from './router'
import classData from '../class-data'

let data = {
  classData: classData,
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
