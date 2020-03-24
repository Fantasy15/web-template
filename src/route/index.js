/**
 * @file index.js
 * @description 路由入口文件
 */

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

import Index from '../views/index/index.vue';
import About from '../views/About/index.vue';

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
