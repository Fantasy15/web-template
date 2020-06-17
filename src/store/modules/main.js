/**
 * @file main.js
 * @description 入口store
 */

 import {useLocalStore} from 'mobx-react';

const Main = () => useLocalStore(() => ({
    count: 1,
    plusCount() {
        console.log(this);
        this.count ++;
    }
}))

export default Main;