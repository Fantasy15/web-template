/**
 * @file webpack.config.dev.js
 * @description webpack 开发环境配置文件, 启动了devServer
 */

const baseConfig = require('./vite.config');

module.exports = () => {
    return Object.assign(baseConfig('dev'), {
        define: {
            baseData: JSON.stringify(require('../src/plugin/baseData/baseData.dev'))
        },
        server: {
            open: true,
            proxy: [
                {
                    target: 'http://dev.qq.com:8888',
                    context: [
                        '/index',
                        '/search'
                    ],
                    headers: {
                        cookie: ''
                    },
                    secure: true,
                    changeOrigin: true,
                    ws: true,
                    xfwd: true
                }
            ]
        },
    });
};