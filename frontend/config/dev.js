const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = merge(commonConfig, {
   
    mode: 'development',
    devtool: 'inline-source-map',  // eval // source-map
    entry: {
        'app': ['./client/src/']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../dist'),
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
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
    }



}); 
