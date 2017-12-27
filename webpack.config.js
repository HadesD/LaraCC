const path = require('path');
const webpack = require('webpack');

const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');

const publicPath = 'Build/Bin/public'

const plugins = [
  new ExtractTextPlugin({
    filename: '[name].[hash].bundle.css',
    allChunks: true,
  }),
  new ManifestPlugin({
    path: publicPath,
  }),
  new webpack.ProvidePlugin({
    Promise: 'bluebird',
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    },
  }),
];

const config = {
  context: path.resolve(__dirname, 'resources/assets'),
  entry: {
    'app': [
      './js/app.js'
    ],
    'dashboard': [
      './js/dashboard.js',

      // JSX
      './js/spa/DashboardApp.jsx'
    ],
    'home': [
      './js/home.js',

      // JSX
      './js/spa/HomeApp.jsx'
    ],
    'home.rebase': [
      './css/home.css',
    ],
  },
  output: {
    path: path.resolve(__dirname, publicPath),
    filename: '[name].[hash].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader'),
      }
    ],
  },
  plugins: plugins,
  watch: process.env.NODE_ENV !== 'production',
}

module.exports = () => {
  return config;
};

