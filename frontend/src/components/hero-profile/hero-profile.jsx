import React, { PureComponent } from 'react';
import profile from './profile.jpg';
import './hero-profile.scss'

class HeroProfile extends PureComponent {
  render() {
    return (
      <section className="profile jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-sm-12">
              <header>
                <img src={profile} className="rounded-circle float-right" height="120" width="120"/>
                <h1>
                  <a className="link link-darker">Jiazhen Xie</a>
                </h1>
                <p className="hero-description description-color">
                  Senior Software Engineer. Tech Enthusiasm. Traveler. Father.
                  <a className="link description-color" href="https://twitter.com/JIAZHENXIE">
                    @JiazhenXie
                  </a>
                </p>
              </header>
              <div>
                <ul className="list-inline">
                  <li>
                    <a className="link description-color media-set" href="https://github.com/JIAZHEN">
                      <i className="fa fa-github fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a className="link description-color media-set" href="https://uk.linkedin.com/in/jiazhen-xie-25663763">
                      <i className="fa fa-linkedin fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a alt="wechat - jiazhenjoe" className="link description-color media-set" href="https://www.wechat.com/en/">
                      <i className="fa fa-weixin fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a className="link description-color media-set" href="https://twitter.com/JIAZHENXIE">
                      <i className="fa fa-twitter fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a className="link description-color media-set" href="http://www.weibo.com/jiazhenxie">
                      <i className="fa fa-weibo fa-lg"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroProfile;
