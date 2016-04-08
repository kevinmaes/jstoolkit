/* eslint no-console: "off" */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const app = express();

const config = require('./webpack.config');

// Change this per project.
const PORT = 3400;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('*', (req, res) => {
  console.log('__dirname', __dirname);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost: ${PORT}`);
});
