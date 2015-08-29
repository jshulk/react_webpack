var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var webpack = require("webpack");

var config = {
  entry: {
  		app: path.resolve(__dirname, 'app/main.js'),
  		vendors: ['react'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,

      // There is not need to run the loader through
      // vendors
      exclude: [node_modules_dir],
      loader: 'babel'
    }]
  },
  plugins: [
  	new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};

module.exports = config;