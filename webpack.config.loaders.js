module.exports = function() {
    return [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: ['babel-loader']
        }
    ];
};