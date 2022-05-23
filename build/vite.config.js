/**
 * @file webpack.config.js
 * @description webpack 基础配置
 */

const { resolve } = require('path');
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer';
import legacy from '@vitejs/plugin-legacy'
import url from '@rollup/plugin-url';

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {

    let isDev = env === 'dev';

    return {
        // context: path.resolve(__dirname, '../'),
        // entry: {
        //     index: './src/index.js',
        // },
        // output: {
        //     publicPath: '/',
        //     path: path.resolve(`dist`),
        //     filename: `js/[name]${isDev ? '' : '.[contenthash:8]'}.js`
        // },
        // module: {
        //     rules: [
        //         {
        //             test: /\.svg$/,
        //             use: [{
        //                 loader: 'svg-sprite-loader',
        //             }],
        //         },
        //     ]
        // },
        css: {
            postcss: {
                plugins: [require('autoprefixer')]
            }
        },
        plugins: [
            vue(),
            url({
                limit: 8192,
                exclude: [
                    '**/*.svg'
                ]
            }),
            // isDev ? function () {} : legacy({
            //     targets: ['defaults', 'not IE 11']
            // }),
            process.env.Analyze ? visualizer({open: true}) : function() {}
            // new MiniCssExtractPlugin({
            //     filename: `css/[name]${isDev ? '' : '.[contenthash:8]'}.css`,
            // }),
        ],
        resolve: {
            // 配置别名，在项目中可缩减引用路径，大写防止混淆
            alias: {
                Src: resolve(`src`),
                Assets: resolve(`src/assets`),
                Component: resolve(`src/component`),
                Http: resolve(`src/http`),
                Store: resolve(`src/store`),
            }
        },

    }
}