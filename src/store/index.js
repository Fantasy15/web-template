/**
 * @file index.js
 * @description store 入口
 */

import UserInfo from './modules/userInfo';

class RootStore {
    constructor() {
        this.userStore = new UserInfo(this);
    }
}

export default new RootStore();