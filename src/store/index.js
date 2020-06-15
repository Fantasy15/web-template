/**
 * @file index.js
 * @description store 入口
 */

import UserInfo from './modules/userInfo';
import Main from './modules/main';

class RootStore {
    constructor() {
        this.userStore = new UserInfo(this);
        this.mainStore = new Main(this);
    }
}

export default new RootStore();