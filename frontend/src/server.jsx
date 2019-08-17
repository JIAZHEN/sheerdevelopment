import App from './app'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import { renderToString } from 'react-dom/server'
import serialize from 'serialize-javascript'
import qs from 'qs'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    fetchCounter(apiResult => {
      const store = configureStore()

      const context = {}
      const Root = () => (
        <Provider store={store}>
          <StaticRouter context={context} location={req.url}>
              <App />
          </StaticRouter>
        </Provider>
      )
      const markup = renderToString(<Root />)
      const finalState = store.getState()

      if (context.url) {
        res.redirect(context.url)
      } else {
        res.status(200).send(
          `<!doctype html>
              <html lang="en">
              <head>
                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta charset="utf-8" />
                  <title>Senior Software Engineer | Jiazhen Xie</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  ${
                    assets.client.css
                      ? `<link rel="stylesheet" href="${assets.client.css}">`
                      : ''
                  }
                  <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                  />
                  ${
                    process.env.NODE_ENV === 'production'
                      ? `<script src="${assets.client.js}" defer></script>`
                      : `<script src="${assets.client.js}" defer crossorigin></script>`
                  }
              </head>
              <body>
                  <div id="root">${markup}</div>
                  <script>
                    window.__PRELOADED_STATE__ = ${serialize(finalState)}
                  </script>
              </body>
          </html>`
        )
      }
    })
  })

export default server
