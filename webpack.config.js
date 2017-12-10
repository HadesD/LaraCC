const path = require('path');
const webpack = require('webpack');

const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
  new ExtractTextPlugin({
    filename: '[name].[hash].bundle.css',
    allChunks: true
  }),
  new ManifestPlugin()
  // isProduction ? new UglifyJsPlugin() : new ManifestPlugin()
];


module.exports = function (env) {
  return {
    context: path.resolve(__dirname, 'resources/assets'),
    entry: {
      'js/app': [
        './js/app.js'
      ],
      'js/dashboard': [
        './js/dashboard.js',

        // JSX
        './js/components/DashboardApp.jsx'
      ],
      'js/home': [
        './js/home.js',

        // JSX
        './js/components/HomeApp.jsx'
      ],
      'css/app': [
        './css/app.css'
      ],
      'css/dashboard': [
        './css/dashboard.css'
      ],
      'css/home': [
        './css/dashboard.css'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'Build/Bin/public'),
      filename: '[name].[hash].bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: {
            presets: [
              'env',
            ],
            plugins: [
              ['transform-react-jsx', { "pragma": "h" }]
            ]
          },
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: 'css-loader?importLoaders=1',
          }),
        }],
    },
    plugins,
    watch: true,
  };
}

