/**
 * @file index.js
 * @description 项目初始化入口
 */

import '@babel/polyfill';
 
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

import './assets/style/index.less';
require('./assets/svg');

createRoot(document.getElementById('app'))
    .render(<App />);
