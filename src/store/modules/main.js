/**
 * @file main.js
 * @description 入口store
 */

 import {useLocalStore} from 'mobx-react';

const Main = () => useLocalStore(() => ({
    count: 1,
    plusCount() {
        this.count ++;
    }
}))

export default Main;