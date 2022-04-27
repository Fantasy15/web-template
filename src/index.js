/**
 * @file index.js
 * @description 入口文件
 */

import '@babel/polyfill';
import { createApp } from 'vue';
import { router } from './route';
import { createPinia } from 'pinia';
import App from './app.vue';

import plugin from './plugin';

// import all svgs under ./assets/svg
require('./assets/svg');

const app = createApp(App)
        .use(router)
        .use(createPinia())
        .use(plugin);

app.config.performance = baseData.env === 'development';

app.mount('#app');