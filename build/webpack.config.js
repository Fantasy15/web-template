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
            index: './src/index.js',
        },
        output: {
            publicPath: '/',
            path: path.resolve(`dist`),
            filename: `js/[name]${isDev ? '' : '.[chunkhash:8]'}.js`
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
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [require('autoprefixer')]
                                }
                            }
                        },
                        'less-loader',
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
                        name: `images/[name].${isDev ? '' : '.[chunkhash:8]'}.[ext]`,
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
                filename: `css/[name]${isDev ? '' : '.[chunkhash:8]'}.css`,
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
                chunks: 'all',
                cacheGroups: {
                    vuelib: {
                        test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
                        name: 'vuelib',
                        chunks: 'all',
                    }
                }
            },
        },
        stats: {
            children: false,
            modules: false
        }

    }
}