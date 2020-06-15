/**
 * @file index.js
 * @description store 入口
 */

import React from 'react';
import UserInfo from './modules/userInfo';
import Main from './modules/main';
import { useLocalStore } from 'mobx-react';
import { observable } from 'mobx';

// const Main = observable((rootStore) => ({
//     count: 1,
//     plusCount() {
//         Main.count ++
//     }
// }));

export const StoresContext = React.createContext({
    userStore: new UserInfo(this),
    mainStore: new Main(this),
    // mainStore: Main(this)
})

export const useStores = () => React.useContext(StoresContext);