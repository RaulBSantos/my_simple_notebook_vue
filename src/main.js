import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import App from './App.vue';

import VueMarkdown from 'vue-markdown';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Registering as global component
Vue.component('vue-markdown', VueMarkdown);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
