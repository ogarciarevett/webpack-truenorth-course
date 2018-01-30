const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      // TOOD: ADD COMPONENTS PATHS HERE
    }
  },
  devServer: {
    progress: true,
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist')
  }
};
