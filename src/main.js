import { createApp } from 'vue'
import App from './App.vue'

import Box from './components/content/Box.vue';

createApp(App)
  .component('Box', Box)
  .mount('#app')
