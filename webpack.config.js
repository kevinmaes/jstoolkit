const webpack = require('webpack');
const path = require('path');

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'eval',

  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:4700',
      'webpack/hot/only-dev-server',
      './src/index'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    publicPath: '/build/'
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['src', 'node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
