const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // context: __dirname,
  entry: ['./src/browser/index.js'],
  output: {
    path: path.join(__dirname, '../public/build'),
    filename: '[name].js',
    publicPath: '/public/build/',
    pathinfo: false, // ?
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  optimization: {
    minimize: true
  },
};

module.exports = merge(baseConfig, config);
