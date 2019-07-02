import React, { Component, Fragment } from 'react'
import Nav from './components/nav/nav'
import HeroProfile from './components/hero-profile/hero-profile'
import Posts from './components/posts/posts'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <HeroProfile />
        <Posts />
      </Fragment>
    );
  }
}

export default App;
