/**
 * @file webpack.config.online.js
 * @description webpack 线上环境配置
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = () => {
    return merge(baseConfig('online'), {
        mode: 'production',
        plugins: [
            new webpack.DefinePlugin({
                baseData: JSON.stringify(require('../src/plugin/baseData/baseData.online'))
            })
        ],
    })
}