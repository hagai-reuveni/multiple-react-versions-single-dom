const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './packages/shell/src/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/packages/shell/dist',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './packages/',
    hot: true,
  }
};
