var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry:  __dirname + "/src/app.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['babel', 'eslint-loader'],
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
