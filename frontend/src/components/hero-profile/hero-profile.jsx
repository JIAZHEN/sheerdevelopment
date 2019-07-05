import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from './profile.jpg';
import './hero-profile.scss'

class HeroProfile extends PureComponent {
  render() {
    return (
      <section className="profile jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div>
                <img src={profile} className="rounded-circle float-right" height="120" width="120"/>
                <h1>
                  <a className="link link-darker">Jiazhen Xie</a>
                </h1>
                <p className="hero-description text-secondary">
                  Senior Software Engineer. Tech Enthusiasm. Traveler. Father

                  <a className="text-secondary twitter-link" href="https://twitter.com/JIAZHENXIE">
                    @JiazhenXie
                  </a>
                </p>
              </div>
              <div>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a target="_blank" alt="github" className="text-secondary media-set" href="https://github.com/JIAZHEN">
                      <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" alt="linkedin" className="text-secondary media-set" href="https://uk.linkedin.com/in/jiazhen-xie-25663763">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" alt="wechat - jiazhenjoe" className="text-secondary media-set" href="https://www.wechat.com/en/">
                      <FontAwesomeIcon icon={["fab", "weixin"]} size="lg" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" alt="twitter" className="text-secondary media-set" href="https://twitter.com/JIAZHENXIE">
                      <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a target="_blank" alt="weibo" className="text-secondary media-set" href="http://www.weibo.com/jiazhenxie">
                      <FontAwesomeIcon icon={["fab", "weibo"]} size="lg" />
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