const path = require('path')
const HWP = require('html-webpack-plugin');

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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
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
    }]
  },
  plugins:[
    new HWP({
      template: path.join(__dirname, "./src/index.html"),
      filename: "./index.html"
    })
  ],
  watch: true
};
