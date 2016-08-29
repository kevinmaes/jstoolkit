const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

// Start watching and bundling tests here
const tests = require('./webpack.test.config');
const testsCompiler = webpack(tests);
//
testsCompiler.watch({}, (err) => {
  if (err) {
    // console.log(err);
  } else {
    // console.log('Bundle rebuilt');
  }
});

// Primary app
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
})
.listen(4700, 'localhost', (err) => {
  if (err) {
    // console.log(err);
  }
});
