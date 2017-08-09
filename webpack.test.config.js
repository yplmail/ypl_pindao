const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');

fs.open('./src/config/env.js', 'w', function(err, fd) {
    const buf = 'export default "development";';
    fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
});

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/',
        filename: 'js/[name].[hash:7].js',
        chunkFilename: 'js/[name].[hash:7].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].[hash:7].css',
            allChunks: true
        }),
        new CopyWebpackPlugin([
            { from:'./src/common/common.css', to: 'css/common.css'}
        ]),               
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'js/vendors.[hash:7].js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../dist/index.html',
            template: './src/template/index.ejs',
            inject: false
        })
    ]
});