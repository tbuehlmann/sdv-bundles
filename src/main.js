import Vue from 'vue';

import store from './store';
import router from './router';

import App from './App.vue';

Vue.config.productionTip = false

new Vue({
  store: store,
  router: router,
  render: h => h(App)
}).$mount('#app');
