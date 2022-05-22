/**
 * @file babel.config.js
 * @description babel config file
 */

module.exports = {
    presets: [
        [
            '@babel/preset-env', {
                useBuiltIns: 'entry',
                targets: { 
                    ie: 9
                },
                corejs: 2
            }
        ], 
        'mobx'
    ],
    plugins: [
        '@babel/plugin-transform-react-jsx',
    ]
}