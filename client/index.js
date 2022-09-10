import { createApp } from 'vue';
import App from './app.vue';
import plugins from './plugins';

createApp( App )
  .use( plugins.fetch )
  .mount('#app');
