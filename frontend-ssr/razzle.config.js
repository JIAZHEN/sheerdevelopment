const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader'],
      },
    ]
  },
  plugins: ['scss']
};
