var path = require('path');

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
  resolve: {
    extensions: ['', '.js']
  }
};
