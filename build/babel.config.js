/**
 * @file babel.config.js
 * @description babel config file
 */

module.exports = {
    presets: ['@babel/preset-env', 'mobx'],
    plugins: [
        '@babel/plugin-transform-react-jsx',
    ]
}