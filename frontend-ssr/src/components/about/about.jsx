import React, { PureComponent, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.scss';

class About extends PureComponent {
  render() {
    return (
      <Fragment>
        <section id="intro-header">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div id="head-slider">
                  <h2>
                    <figure className="intro-text-center">
                      <img src={require('./im-jiazhen.png')} />
                    </figure>
                  </h2>
                  <p className="intro-text-center intro-header-desc text-success">a Senior Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hello">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <article>
                  <figure className="intro-text-center">
                    <img className="rounded-circle" height="150" src={require('./../hero-profile/profile.jpg')} width="150"/>
                  </figure>
                  <h3 className="intro-text-center text-success intro-padding">Hi.</h3>
                  <p className="intro-text-center intro-detail intro-detail-color">
                    I'm a Senior Software Engineer / Applied Machine Learning Engineer based in London, United Kingdom. I'm passionate about web, AI and backend processes.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <div className="breaker">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="line intro-text-center"></div>
              </div>
            </div>
          </div>
        </div>

        <section id="what-i-do">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <article>
                  <header>
                    <h2 className="intro-text-center text-success">What I do</h2>
                  </header>
                  <div className="row margin-btm-40" id="design">
                    <div className="col-md-3 offset-md-3">
                      <img src={require('./attack-on-titan.png')} className="rounded-circle" height="150" width="150" />
                    </div>
                    <div className="col-md-4 offset-md-1">
                      <div className="deets">
                        <h3 className="no-top-margin link-light-accent text-center padding-btm-20">Develop the need</h3>
                        <p className="intro-detail-color">
                          I'm a business-focus developer. Focusing on improving apps performance and developing the apps that are needed in the right techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row margin-btm-40" id="develop">
                    <div className="col-md-4 offset-md-2">
                      <div className="deets">
                        <h3 className="link-light-accent text-center padding-btm-20">Explore the world</h3>
                        <p className="intro-detail-color">
                          I like the new technologies. I'm regularly on the lookout for ways to improve and achieve goals.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 intro-text-center">
                      <img src={require('./sao.png')} className="rounded-circle" height="150" width="150"/>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <div className="breaker">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="line intro-text-center"></div>
              </div>
            </div>
          </div>
        </div>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <article>
                  <h2 className="intro-text-center text-success margin-btm-40">Projects</h2>
                  <div className="deets">
                    <p className="intro-text-center intro-detail intro-detail-color">
                      I always like to make contributions to the dev community. So far I have

                      <a target="_blank" className="text-success" href="https://github.com/JIAZHEN/ab-rules"> ab-rules </a>
                      and
                      <a target="_blank" className="text-success" href="https://github.com/JIAZHEN/releasehub"> releasehub. </a>
                      I can be reached at

                      <a target="_blank" alt="github" className="text-secondary about-media-set" href="https://github.com/JIAZHEN">
                        <FontAwesomeIcon icon={["fab", "github"]} size="xs" />
                      </a>
                      <a target="_blank" alt="linkedin" className="text-secondary about-media-set" href="https://uk.linkedin.com/in/jiazhen-xie-25663763">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} size="xs" />
                      </a>
                      <a target="_blank" alt="wechat - jiazhenjoe" className="text-secondary about-media-set" href="https://www.wechat.com/en/">
                        <FontAwesomeIcon icon={["fab", "weixin"]} size="xs" />
                      </a>
                      <a target="_blank" alt="twitter" className="text-secondary about-media-set" href="https://twitter.com/JIAZHENXIE">
                        <FontAwesomeIcon icon={["fab", "twitter"]} size="xs" />
                      </a>
                      <a target="_blank" alt="weibo" className="text-secondary about-media-set" href="http://www.weibo.com/jiazhenxie">
                        <FontAwesomeIcon icon={["fab", "weibo"]} size="xs" />
                      </a>
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default About;
