const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve('dist')
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.svg$/, use: 'svg-sprite-loader' }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};