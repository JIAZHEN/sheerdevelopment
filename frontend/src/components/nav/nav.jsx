import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import pandaImage from './panda.png';
import './nav.scss'

class Nav extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between fixed-top">
        <a className="navbar-brand" href="/">
          <img src={pandaImage} width="45px" />
          Jiazhen Xie
        </a>

        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 mr-sm-2" type="submit">Search</button>

          <Link to={'/'} className="btn btn-outline-success my-2 mr-sm-2"> Blog</Link>
          <Link to={'/about'} className="btn btn-outline-success my-2 mr-sm-0"> About</Link>
        </form>
      </nav>
    );
  }
}

export default Nav;
