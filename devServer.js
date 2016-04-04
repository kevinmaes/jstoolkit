var path = require('path');
var express = require('express');
var webpack = require('webpack');
var app = express();

var config = require('./webpack.config');

// Change this per project.
var PORT = 3400;
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('*', function(req, res) {
  console.log("__dirname", __dirname);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + PORT);
});
