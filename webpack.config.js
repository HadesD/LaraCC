const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  context: path.resolve(__dirname, 'resources/assets'),
  entry: {
    'js/app': [
      './js/app.js'
    ],
    'js/dashboard': [
      './js/dashboard.js'
    ],
    'css/app.base': [
      './css/app.base.css'
    ],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash].bundle.js',
  },

  plugins: [
    new ExtractTextPlugin('[name].[hash].bundle.css'),
    new ManifestPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: isProduction,
      compress: isProduction,
    }),
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

