/**
 * @file index.js
 * @description 路由入口文件
 */

import Index from '../views/index';
import About from '../views/about';
import loadable from 'react-loadable'

export default [
    {
        key: 'index',
        path: '/',
        component: loadable({
            loader: () => import('../views/index'),
        })
    },
    {
        key: 'about',
        path: '/about',
        component: loadable({
            loader: () => import('../views/about'),
        })
    }
]