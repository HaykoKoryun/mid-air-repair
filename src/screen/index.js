import Vue from 'vue'
import Screen from './Screen.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Screen),
}).$mount('#app')