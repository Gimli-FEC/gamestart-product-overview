const Brotli = require('brotli-webpack-plugin');

const Gzip = require('compression-webpack-plugin');

const path = require('path');

module.exports = {
  plugins: [
    new Brotli({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.7
    }),
    new Gzip({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.7
    })
  ],
  entry: path.resolve(__dirname, 'client', 'index.jsx'),
  output: {
    filename: 'myApp.js',
    path: path.resolve(__dirname, 'public'),
    sourceMapFilename: 'myApp.js.map',
  },
  devtool: '',
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules','styled-components')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
};
