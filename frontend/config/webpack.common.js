const webpack = require('webpack');
const helpers = require('./helpers');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const publicpath = helpers.root('client/public');
module.exports = {

  plugins: [
   // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: helpers.root('client/public/index.html'),
    }),

    new MiniCssExtractPlugin({
      filename: 'css/application.css'
    }),

    new CopyWebpackPlugin(
      [
        {
          from: helpers.root('client/public'),
        },


      ]
    )
  ],


  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: helpers.root('client'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }],
      },


      {
        test: /.(png|woff(2)?|eot|jpg|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000',
      }
      , {
        test: /\.(png|woff(2)?|eot|jpg|ttf|svg)$/i,
        use: [{
          loader: 'file-loader',
        }]

      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },


      // SCSS files

      {
        test: /\index.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              publicPath: '../',
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },

};
