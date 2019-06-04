const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  target: 'node',
  entry:  ['./src/server/index.js'],
  output:  {
    filename: 'server.js',
    path: path.resolve(__dirname, '../build'),
  },
  resolve: {
    extensions: ['.js', '.json']
  },
}

module.exports = merge(baseConfig, config);
