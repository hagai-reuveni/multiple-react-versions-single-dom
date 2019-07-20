const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  externals: {      
    // Don't bundle react or react-dom      
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        },
    ],
  },
  resolve: {
      extensions: ['*', '.js', '.jsx'],
  },
};
