/**
 * @file webpack.config.js
 * @description webpack 基础配置
 */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelConfig = require('./babel.config');
const WebpackBar = require('webpackbar');

module.exports = (env) => {

    let isDev = env === 'dev';

    return {
        context: path.resolve(__dirname, '../'),
        entry: {
            'index': [
                'babel-polyfill',
                './src/index.js'
            ],
        },
        output: {
            publicPath: '/',
            path: path.resolve(`dist`),
            filename: `js/[name].${isDev ? '' : '[chunkhash:8]'}.js`
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: babelConfig
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'icon-font-loader',
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [require('autoprefixer')]
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/,
                    use: [{
                        loader: 'svg-sprite-loader',
                    }],
                },
                {
                    test: /\.(jpeg|jpg|png|gif|woff|ttf)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: `images/[name].${isDev ? '' : '.[hash:8]'}.[ext]`,
                    }
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebPackPlugin({
                filename: `./index.html`,
                template: path.resolve(`./public/index.html`),
            }),
            new MiniCssExtractPlugin({
                filename: `css/[name]${isDev ? '' : '.[hash:8]'}.css`,
            }),
            new WebpackBar()
        ],
        resolve: {
            // 配置别名，在项目中可缩减引用路径，大写防止混淆
            alias: {
                Assets: path.resolve(`src/assets`),
                Component: path.resolve(`src/component`),
                Http: path.resolve(`src/http`)
            }
        },
        optimization: {
            splitChunks: {
                'chunks': 'all'
            },
        },
        stats: {
            children: false,
            modules: false
        }

    }
}