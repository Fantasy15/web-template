/**
 * @file index.js
 * @description 入口文件
 */

import '@babel/polyfill';
import { createApp } from 'vue';
import { router } from './route';
import App from './app.vue';

// import plugin from './plugin';
// Vue.use(plugin);

// Vue.config.performance = baseData.env === 'development';

// import all svgs under ./assets/svg
require('./assets/svg');

const app = createApp(App)
        .use(router)
        .mount('#app')