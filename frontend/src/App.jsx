import React, { Component } from 'react'
import Nav from './components/nav/nav'
import Posts from './components/posts/posts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Posts />
      </div>
    );
  }
}

export default App;
