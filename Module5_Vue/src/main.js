// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import { getExternalTodos } from './store/external.store';

Vue.config.productionTip = false;

const myPlugin = {
    install(vue, options) {
        vue.prototype.$getExternalTodos = getExternalTodos;
    }
};

Vue.use(myPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>',
});
