import App from './app'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'
import React from 'react'
ReactGA.initialize('UA-50154241-2')

const history = createBrowserHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore(window.__PRELOADED_STATE__)

hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
