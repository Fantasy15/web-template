/**
 * @file userInfo.js
 * @description 用户信息store
 */

import http from 'Http';
import { useLocalStore } from 'mobx-react';

const UserInfo = () => useLocalStore(() => ({
    name: '张三',
    get fullName() {
        return this.name + 'haha';
    },
    getUserInfo () {
        return http.getUserInfo().then(result => {
            if (result) {
                this.name = result;
            }
        });
   }
}))

export default UserInfo;