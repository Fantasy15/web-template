/**
 * @file webpack.config.js
 * @description webpack 基础配置
 */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const IconFontPlugin = require('icon-font-loader').Plugin;
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
            filename: `js/bundle.${isDev ? '' : '.[chunkhash:8]'}.js`
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
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
                        'icon-font-loader',
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
            new IconFontPlugin(),
            new VueLoaderPlugin(),
            new HtmlWebPackPlugin({
                filename: `./index.html`,
                template: path.resolve(`./public/index.html`),
            }),
            new MiniCssExtractPlugin({
                filename: `css/${isDev ? '' : '.[hash:8]'}.css`,
                chunkFilename: `css/[name]${isDev ? '' : '.[hash:8]'}.css`
            }),
            new WebpackBar({
                name: `webpack env:${env}`
            })
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