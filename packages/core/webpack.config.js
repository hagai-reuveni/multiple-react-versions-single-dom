const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'core.js',
    path: __dirname + '/dist',
    publicPath: '/',
  },
};