/**
 * @file webpack.config.dev.js
 * @description webpack 开发环境配置文件, 启动了devServer
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map'
});