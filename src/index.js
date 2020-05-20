/**
 * @file index.js
 * @description 项目初始化入口
 */

import '@babel/polyfill';
 
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './app';

import './assets/style/index.less';
require('./assets/svg');

console.log(baseData.host);
console.log(baseData.hmLink);

ReactDOM.render(
    <App store={store} />,
    document.getElementById('app')
);