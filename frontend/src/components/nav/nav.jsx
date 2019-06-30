import React, { PureComponent } from 'react';

class Nav extends PureComponent {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top padding-15" role="banner">
        <div class="container-fluid">
          <div class="navbar-header">
            <button class="navbar-toggle">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span></button>
            <a class="navbar-brand brand-logo"></a>
          </div>
          <div class="collapse navbar-collapse">
            <div class="navbar-text brand-text">
              <a class="link link-darker">
                <b>Jiazhen Xie</b></a>
            </div>
            <div class="navbar-right">
              <a class="btn navbar-btn rounded-btn">Blog</a>
              <a class="btn navbar-btn rounded-btn">About</a>
            </div>
            <form id="search" class="navbar-form navbar-right">
              <div class="form-group">
                <input class="form-control rounded-btn" />xxx</div></form></div>
        </div>
      </nav>

    );
  }
}

export default Nav;
