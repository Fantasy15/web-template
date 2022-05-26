/**
 * @file webpack.config.online.js
 * @description webpack 线上环境配置
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
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
                    lib: {
                        test: /[\\/]node_modules[\\/](react|react-dom|react-router|mobx)[\\/]/,
                        name: 'lib',
                        chunks: 'all',
                    }
                }
            },
            minimizer: [
                new PreloadWebpackPlugin({
                    rel: 'preload',
                    include: {
                        type: 'initial',
                        chunks: ['index']
                    },
                    fileBlacklist: [/\.css/]
                }),
                new CssMinimizerPlugin(),
                new TerserPlugin()
            ],
        },
        plugins: [
            ifAnalyze ? new BundleAnalyzerPlugin() : function () { },
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