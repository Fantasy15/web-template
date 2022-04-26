/**
 * @file userInfo.js
 * @description 用户信息 store
 */

// import http from 'Http';
import { defineStore } from 'pinia';

export const userStore = defineStore('userStore', {
    state: () => ({
        userInfo: {
            name: '张三',
        },
        count: 1,
    }),
    getters: {
        msg: state => {
            return `${state.userInfo.name} 是个好同志`;
        }
    },
    actions: {
        addCount(num) {
            this.count += num;
        }
    },
});
