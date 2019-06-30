import React, { Component } from 'react';
import Nav from './components/nav/nav'

class App extends Component {
  componentDidMount() {
    window.fetch('/v1/posts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <p>hello</p>
      </div>
    );
  }
}

export default App;
