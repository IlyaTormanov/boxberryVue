import Vue from 'vue'
import App from './App.vue'
const VueInputMask = require('vue-inputmask').default;
Vue.use(VueInputMask);


Vue.config.productionTip = false

new Vue({
  render: h => h(
      App,

  ),
}).$mount('#app')
