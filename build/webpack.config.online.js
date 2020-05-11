/**
 * @file webpack.config.online.js
 * @description webpack 线上环境配置
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => {
    return merge(baseConfig('prod'), {
        mode: 'production',
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({}),
                new TerserPlugin()
            ],
        },
        plugins: [
            new BundleAnalyzerPlugin(),
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                baseData: JSON.stringify(require('../src/baseData/baseData.online'))
            }),
        ],
        performance: {
            hints: 'warning'
        }
    })
}