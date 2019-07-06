const path = require('path')
const HWP = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, '/src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    proxy: [{
      context: ['/v1', '/api'],
      target: 'http://localhost:3001',
    }],
    historyApiFallback: true
  },
  plugins:[
    new HWP({
      template: path.join(__dirname, "./src/index.html"),
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
};
