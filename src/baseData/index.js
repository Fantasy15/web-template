/**
 * @file index.js
 * @description 一些静态变量,通过 webpack 编译进全局
 */

module.exports = (env) => {
    return env === 'dev'
        ? require('./base_Data.test')
        : require('./base_Data.online')
};
