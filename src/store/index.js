/**
 * @file index.js
 * @description store 入口
 */

import React from 'react';
import UserInfo from './modules/userInfo';
import Main from './modules/main';

export const store = () => ({
    userStore: UserInfo(),
    mainStore: Main(),
});

export const StoresContext = React.createContext({});

