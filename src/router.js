import Vue from 'vue';
import VueRouter from 'vue-router';

import Items from './components/Items.vue';

Vue.use(VueRouter);

const routes = [
  {name: 'items', path: '/', component: Items}
];

export default new VueRouter({
  routes: routes,
  mode: 'history'
});
