import Vue from 'vue'
import App from './App.vue'
import router from './router'
import classData from '../../data/class-data'

Vue.config.productionTip = false

let data = {
  classData: classData,
}
new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
