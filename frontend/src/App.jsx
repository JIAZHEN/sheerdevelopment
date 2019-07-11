import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Posts from './components/posts/posts';
import Post from './components/posts/post';
import About from './components/about/about';
import NotFound from './components/not-found/not-found';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

ReactGA.initialize('UA-50154241-2');

const history = createBrowserHistory();
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Switch history={history}>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/about" component={About} />
          <Route path="/posts/:slug" component={Post} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
