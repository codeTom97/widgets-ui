import Vue from 'vue';
import App from './app.vue'
import Router from './router.js';
import WidgetsUI from 'widgets-ui';

Vue.use(WidgetsUI);

new Vue({
    router: Router,
    render: h => h(App)
}).$mount('#app')