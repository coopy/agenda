var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: ['./src/main'],
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/client',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, '/src')
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1'],
        include: path.join(__dirname, '/src')
      }
    ]
  },
  plugins: [
      new DashboardPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  }
};
