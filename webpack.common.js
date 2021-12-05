const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const babel = require('./webpack/babel');

const Path = {
  SOURCE: path.join(__dirname, 'src'),
  BUILD: path.join(__dirname, 'build')
};

module.exports = {
  entry: `${Path.SOURCE}/app.js`,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: process.env.npm_package_description ? process.env.npm_package_description : 'Webpack Start App',
      filename: 'index.html',
      template: Path.SOURCE + '/index.html'
    })
  ],
  output: {
    filename: '[name].[contenthash].min.js',
    path: path.resolve(__dirname, Path.BUILD),
    publicPath: '/',
    assetModuleFilename: '[name][ext]'
  },
  module: {
    rules: [babel()]
  },
  target: 'web', // for HMR
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
