import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

createApp(App).use(router).mount('#app')