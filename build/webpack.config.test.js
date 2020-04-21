/**
 * @file webpack.config.test.js
 * @description webpack 测试环境配置文件, 除了数据，配置基本与线上保持一致
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = 'test';

module.exports = () => {
    return merge(baseConfig(env), {
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