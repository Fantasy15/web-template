/**
 * @file webpack.config.online.js
 * @description webpack 线上环境配置
 */

const baseConfig = require('./vite.config');

module.exports = () => {
    return Object.assign(baseConfig('prod'), {
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
            baseData: JSON.stringify(require('../src/plugin/baseData/baseData.online'))
        },
    })
}