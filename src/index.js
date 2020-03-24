/**
 * @file index.js
 * @description 入口文件
 */

import Vue from 'vue';
import App from './app.vue';
import router from './route';
import store from './store';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');