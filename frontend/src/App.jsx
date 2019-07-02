import React, { Component, Fragment } from 'react'
import Nav from './components/nav/nav'
import Posts from './components/posts/posts'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Posts />
      </Fragment>
    );
  }
}

export default App;
