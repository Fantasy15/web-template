/**
 * @file webpack.config.test.js
 * @description webpack 测试环境配置文件, 除了数据，配置基本与线上保持一致
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => {
    return merge(baseConfig('test'), {
        mode: 'production',
        optimization: {
            splitChunks: {
                name: 'vendors',
                chunks: 'all',
                cacheGroups: {
                    lib: {
                        test: /[\\/]node_modules[\\/](react|react-dom|react-router|mobx)[\\/]/,
                        name: 'lib',
                        chunks: 'all',
                    }
                }
            },
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin()
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                baseData: JSON.stringify(require('../src/baseData/baseData.test'))
            }),
        ],
        performance: {
            hints: 'warning'
        }
    })
}