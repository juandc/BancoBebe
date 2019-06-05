const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  target: 'node',
  externals: [nodeExternals()],
  entry:  ['./src/server/index.js'],
  output:  {
    filename: 'server.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  optimization: {
    minimize: true
  },
}

module.exports = merge(baseConfig, config);
