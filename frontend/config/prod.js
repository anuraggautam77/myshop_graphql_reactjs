const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = merge(commonConfig, {
    mode: 'production', // production
    devtool: 'inline-source-map',


    entry: {
        'app': [
            './client/src/'
        ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],

    optimization: {

        minimize: true,
        minimizer: [ new TerserPlugin() ],

        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    // test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }

            },
            chunks: 'all'
        },
    },
    devServer: {
        contentBase: './client/public',
        historyApiFallback: false,
        stats: 'minimal',// none (or false), errors-only, minimal, normal (or true) and verbose
        watch: true
    },

}); 
