import Vue from 'vue';
import App from './app.vue';
import plugins from '/plugins';

Vue.use( plugins.fetch );

new Vue({
  el: '#app',
  render: h => h( App )
});
