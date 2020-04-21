/**
 * @file webpack.config.test.js
 * @description webpack 测试环境配置文件, 除了数据，配置基本与线上保持一致
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
    return merge(baseConfig('test'), {
        mode: 'production',
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                baseData: JSON.stringify(require('../src/plugin/baseData/baseData.online'))
            })
        ],
        performance: {
            hints: 'warning'
        }
    })
}