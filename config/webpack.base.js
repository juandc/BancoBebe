const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new LoadablePlugin(),
  ],
}
