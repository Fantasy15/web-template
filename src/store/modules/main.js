/**
 * @file main.js
 * @description 入口store
 */

import {observable, action} from 'mobx';
import {useLocalStore} from 'mobx-react';

export default class Main {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable count = 1;

    @action.bound plusCount() {
        this.count ++;
    }
}

// export const Main = ((rootStore) => ({
//     rootStore: rootStore,
//     count: 1,
//     plusCount() {
//         Main.count ++;
//     }
// }))

// export const Main = observable({
//     // rootStore: rootStore,
//     count: 1,
//     plusCount() {
//         Main.count ++;
//     }
// })

// export function Main(rootStore) {
//     return observable({
//         rootStore: rootStore,
//         count: 1,
//         plusCount() {
//             Main.count ++;
//         }
//     })
// }