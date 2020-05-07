/**
 * @file webpack.config.online.js
 * @description webpack 线上环境配置
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = () => {
    return merge(baseConfig('prod'), {
        mode: 'production',
        plugins: [
            new BundleAnalyzerPlugin(),
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                baseData: JSON.stringify(require('../src/plugin/baseData/baseData.online'))
            }),
        ],
        performance: {
            hints: 'warning'
        }
    })
}