import React, { PureComponent } from 'react';
import pandaImage from './panda.png';

class Nav extends PureComponent {

  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between fixed-top">
        <a className="navbar-brand" href="#">
          <img src={pandaImage} width="45px" />
          Jiazhen Xie
        </a>

        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 mr-sm-2" type="submit">Search</button>
          <a className="btn btn-outline-success my-2 mr-sm-2">Blog</a>
          <a className="btn btn-outline-success my-2 my-sm-0">About</a>
        </form>
      </nav>
    );
  }
}

export default Nav;
