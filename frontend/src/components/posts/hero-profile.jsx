import React, { PureComponent } from 'react';

class HeroProfile extends PureComponent {
  render() {
    return (
      <section class="profile jumbotron padding-top-108">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-12">
              <header>
                <img class="img-circle pull-right" height="120" src="" width="120"/>
                <h1>
                  <a class="link link-darker">Jiazhen Xie</a>
                </h1>
                <p class="hero-description description-color">
                  Senior Software Engineer. Tech Enthusiasm. Traveler. Father.
                  <a class="link description-color" href="https://twitter.com/JIAZHENXIE">
                    @JiazhenXie
                  </a>
                </p>
              </header>
              <div>
                <ul class="list-inline">
                  <li>
                    <a class="link description-color media-set" href="https://github.com/JIAZHEN">
                      <i class="fa fa-github fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a class="link description-color media-set" href="https://uk.linkedin.com/in/jiazhen-xie-25663763">
                      <i class="fa fa-linkedin fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a alt="wechat - jiazhenjoe" class="link description-color media-set" href="https://www.wechat.com/en/">
                      <i class="fa fa-weixin fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a class="link description-color media-set" href="https://twitter.com/JIAZHENXIE">
                      <i class="fa fa-twitter fa-lg"></i>
                    </a>
                  </li>
                  <li>
                    <a class="link description-color media-set" href="http://www.weibo.com/jiazhenxie">
                      <i class="fa fa-weibo fa-lg"></i>
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
