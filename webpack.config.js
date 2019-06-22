// https://github.com/johndatserakis/modern-webpack-starter/blob/master/webpack.config.js
// https://github.com/webpack/webpack-dev-server/blob/master/examples/api/simple/server.js#L16
// https://medium.com/code-oil/burning-questions-with-answers-to-why-webpack-dev-server-live-reload-does-not-work-6d6390277920

const path = require('path');

const config = {
    entry: {
        'bundle.js': [
            path.resolve(__dirname, 'src/js/globals.js'),
            path.resolve(__dirname, 'src/js/Threex.js'),
            path.resolve(__dirname, 'src/js/Physics.js'),
            path.resolve(__dirname, 'src/js/drums.js'),
            path.resolve(__dirname, 'src/js/InstrumentMappings.js'),
            path.resolve(__dirname, 'src/js/Fire.js'),
            path.resolve(__dirname, 'src/js/Light.js'),
            path.resolve(__dirname, 'src/js/app.js'),
            path.resolve(__dirname, 'src/js/audio.js'),
            path.resolve(__dirname, 'src/js/ui.js')
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        // host: '0.0.0.0',
        port: 8082,
        // publicPath: '/assets/',
        publicPath: '/dist/',
        watchContentBase: true, //for html
        historyApiFallback: true
    }
};

module.exports = config;