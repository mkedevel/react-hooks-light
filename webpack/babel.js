module.exports = () => ({
  test: /\.(js|jsx|tsx|ts)$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true
    }
  }
});
