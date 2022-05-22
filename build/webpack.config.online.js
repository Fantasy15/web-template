/**
 * @file webpack.config.online.js
 * @description webpack 线上环境配置
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const args = process.argv;
const ifAnalyze = args.length >= 5 && args[4] === '--analyze';

module.exports = () => {
    return merge(baseConfig('prod'), {
        mode: 'production',
        optimization: {
            splitChunks: {
                name: 'vendors',
                chunks: 'all',
                cacheGroups: {
                    vuelib: {
                        test: /[\\/]node_modules[\\/](@vue|vue-router|vuex|pinia)[\\/]/,
                        name: 'vuelib',
                        chunks: 'all',
                    }
                }
            },
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin()
            ]
        },
        plugins: [
            ifAnalyze ? new BundleAnalyzerPlugin() : function () { },
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