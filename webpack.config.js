var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry:  __dirname + "/src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
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
