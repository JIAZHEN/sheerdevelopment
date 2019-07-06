import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

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

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Switch>
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
