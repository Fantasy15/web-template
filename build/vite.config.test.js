/**
 * @file webpack.config.test.js
 * @description webpack 测试环境配置文件, 除了数据，配置基本与线上保持一致
 */

const baseConfig = require('./webpack.config');

module.exports = () => {
    return Object.assign(baseConfig('test'), {
        // optimization: {
        //     splitChunks: {
        //         name: 'vendors',
        //         chunks: 'all',
        //         cacheGroups: {
        //             vuelib: {
        //                 test: /[\\/]node_modules[\\/](@vue|vue-router|vuex|pinia)[\\/]/,
        //                 name: 'vuelib',
        //                 chunks: 'all',
        //             }
        //         }
        //     },
        // },
        define: {
            baseData: JSON.stringify(require('../src/plugin/baseData/baseData.test'))
        },
    })
}