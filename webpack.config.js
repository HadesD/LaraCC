const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production';

console.log('App is now run in: ' + (isProduction?'Production':'Dev') + ' mode')

module.exports = {
  context: path.resolve(__dirname, 'resources/assets'),
  entry: {
    'js/app': [
      './js/app.js',
    ],
    'js/dashboard': [
      './js/dashboard.js',

      // JSX
      './js/components/dashboard/Login.jsx',
      './js/components/App.jsx',
    ],
    'css/app.base': [
      './css/app.base.css',
    ],
    'css/dashboard': [
      './css/dashboard.css',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'Build/Bin/public'),
    filename: '[name].[hash].bundle.js',
  },

  plugins: [
    new ExtractTextPlugin('[name].[hash].bundle.css'),
    new ManifestPlugin(),
    isProduction ? new UglifyJsPlugin() : new ManifestPlugin(),
  ],

  watch: true,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['env' , {'modules': false}],
            'react'
          ]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          loader: 'css-loader',
          options: {
            minimize: isProduction,
          }
        })
      }
    ]
  }
};

