/**
 * @file webpack.config.js
 * @description webpack 基础配置
 */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        'index': './src/index.js',
    },
    output: {
        publicPath: '/',
        path: path.resolve(`dist`),
        filename: `js/bundle.js`
    },
    module: {

    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: `./index.html`,
            template: path.resolve(`./public/index.html`),
        }),
    ]
}