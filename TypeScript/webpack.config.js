var webpack = require('webpack');
module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' }
    ]
  }
}