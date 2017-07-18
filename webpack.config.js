let loaders = require('./webpack.config.loaders')();
let path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src', 'index.js')],
    output: {
        filename: 'bundle.js',
        path: path.resolve('public'),
    },
    module: {
        loaders
    }
};