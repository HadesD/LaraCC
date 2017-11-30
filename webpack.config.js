const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'resources/assets'),
  entry: {
    'js/app': [
      './js/app.js'
    ],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash].bundle.js',
  },

  plugins: [
    // new ExtractTextPlugin('')
    new ManifestPlugin(),
  ],

  watch: true,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['env'],
          }
        }
      }
    ]
  }
};

