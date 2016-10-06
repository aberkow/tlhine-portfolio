const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    arabella: path.resolve(__dirname, './js/arabella.js'),
    stylesheet: path.resolve(__dirname, './js/stylesheet.js'),
    vendors: path.resolve(__dirname, './js/vendors.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js', '.css']
  }
};
