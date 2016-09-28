
var htmlPlugin = require('html-webpack-plugin');
var htmlPluginConfig = new htmlPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/app.jsx',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: 'node_modules', loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [htmlPluginConfig]
};
