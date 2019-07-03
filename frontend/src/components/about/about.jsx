import React, { PureComponent, Fragment } from 'react';

class About extends PureComponent {
  render() {
    return (
      <Fragment>
        <section id="intro-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div id="head-slider">
                  <h2>
                    <figure className="intro-text-center">
                    </figure>
                  </h2>
                  <p className="intro-text-center intro-header-desc link-accent">a Senior Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hello">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <article>
                  <figure className="intro-text-center">
                    <img className="img-circle" height="150" src="" width="150"/>
                  </figure>
                  <h3 className="intro-text-center link-accent intro-padding">Hi.</h3>
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
                    <h2 className="intro-text-center link-accent">What I do</h2>
                  </header>
                  <div className="row" id="design">
                    <div className="col-md-3 col-md-offset-3">
                      <img className="img-circle" height="150" src="" width="150"/>
                    </div>
                    <div className="col-md-4">
                      <div className="deets">
                        <h3 className="no-top-margin link-light-accent text-center padding-btm-20">Develop the need</h3>
                        <p className="intro-detail-color">
                          I'm a business-focus developer. Focusing on improving apps performance and developing the apps that are needed in the right techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row margin-btm-40" id="develop">
                    <div className="col-md-4 col-md-offset-2">
                      <div className="deets">
                        <h3 className="link-light-accent text-center padding-btm-20">Explore the world</h3>
                        <p className="intro-detail-color">
                          I like the new technologies. I'm regularly on the lookout for ways to improve and achieve goals.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 intro-text-center">
                      <img className="img-circle" height="150" src="" width="150"/>
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
              <div className="col-md-6 col-md-offset-3">
                <article>
                  <h2 className="intro-text-center link-accent margin-btm-40">Projects</h2>
                  <div className="deets">
                    <p className="intro-text-center intro-detail intro-detail-color">
                      I always like to make contributions to the dev community. So far I have

                      <a className="link description-color media-set" href="https://github.com/JIAZHEN">
                        <i className="fa fa-github"></i>
                      </a>
                      <a className="link description-color media-set" href="https://uk.linkedin.com/in/jiazhen-xie-25663763">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a alt="wechat - jiazhenjoe" className="link description-color media-set" href="https://www.wechat.com/en/">
                        <i className="fa fa-weixin"></i>
                      </a>
                      <a className="link description-color media-set" href="https://twitter.com/JIAZHENXIE">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a className="link description-color media-set" href="http://www.weibo.com/jiazhenxie">
                        <i className="fa fa-weibo"></i>
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
