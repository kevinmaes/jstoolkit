var path = require('path')
var webpack = require('webpack')

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
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
