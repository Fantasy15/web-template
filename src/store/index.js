/**
 * @file index.js
 * @description store 入口
 */

import React from 'react';
import UserInfo from './modules/userInfo';
import Main from './modules/main';

export const StoresContext = React.createContext({
    userStore: new UserInfo(this),
    mainStore: new Main(this),
})

export const useStores = () => React.useContext(StoresContext);