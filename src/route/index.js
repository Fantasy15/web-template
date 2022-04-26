/**
 * @file index.js
 * @description 路由入口文件
 */

import { createRouter, createWebHistory } from 'vue-router';

const Index = () => import(/* webpackChunkName: "home" */ '../views/index/index.vue');
const About = () => import(/* webpackChunkName: "about" */ '../views/About/index.vue');

export const router = createRouter({
    history: createWebHistory(),
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
