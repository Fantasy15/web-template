/**
 * @file webpack.config.online.js
 * @description webpack 线上环境配置
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
    mode: 'production',
})