import React, { PureComponent } from 'react';

class Nav extends PureComponent {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top padding-15" role="banner">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span></button>
            <a className="navbar-brand brand-logo"></a>
          </div>
          <div className="collapse navbar-collapse">
            <div className="navbar-text brand-text">
              <a className="link link-darker">
                <b>Jiazhen Xie</b></a>
            </div>
            <div className="navbar-right">
              <a className="btn navbar-btn rounded-btn">Blog</a>
              <a className="btn navbar-btn rounded-btn">About</a>
            </div>
            <form id="search" className="navbar-form navbar-right">
              <div className="form-group">
                <input className="form-control rounded-btn" />xxx</div></form></div>
        </div>
      </nav>

    );
  }
}

export default Nav;
