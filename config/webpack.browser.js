const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  entry: ['./browser/index.js'],
  output: {
    path: path.join(__dirname, '../public/build'),
    filename: '[name].js', // code splitting by loadable-components in (server/utils/render)
    publicPath: '/public/build/', // must be equal to ChunkExtractor (server/utils/render)
  },
  target: 'web',
};

module.exports = merge(baseConfig, config);
