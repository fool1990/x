const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    chunkFilename: '[name].[hash:8].js',
    filename: '[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: './index.html',
      filename: 'index.html',
    }),
  ],
}
