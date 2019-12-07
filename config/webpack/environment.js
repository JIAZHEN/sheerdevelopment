const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.loaders.get('sass').use.splice(-1, 0, {
  loader: 'resolve-url-loader'
})

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    Popper: ['popper.js', 'default'],
    ActionCable: 'actioncable'
  })
)

environment.loaders.append('expose-loader', {
  test: require.resolve('jquery'),
  use: [{
      loader: 'expose-loader',
      options: 'jQuery'
  }, {
      loader: 'expose-loader',
      options: '$'
  }]
})

module.exports = environment
