/**
 * @file vue 插件入口
 * 包含 全局方法，属性， filter, 指令
 */

import util from './util';
import component from './component';
import directive from './directive';

export default function(app) {
    // 添加全局实例常量
    app.config.globalProperties.$baseData = baseData;

    // 添加全局方法
    for (let key in util) {
        (app.config.globalProperties)[key] = util[key];
    }

    // // 注册全局组件
    for (let key in component) {
        app.component(`wiki-${key}`, component[key]);
    }

    // 注册指令
    for (let key in directive) {
        app.directive(`wiki-${key}`, directive[key]);
    }

}