import React, { PureComponent, Fragment } from 'react';
import profileImage from '../hero-profile/profile.jpg';

class Post extends PureComponent {

  constructor (props) {
    super(props)
    this.post = this.getPost(props.match.params.slug)
    console.log(this.post)
  }

  getPost(slug) {
    return window.fetch(`v1/posts/${slug}`)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  render() {
    <section id="post-body">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-2">
            <div class="post-avatar">
              <img class="rounded-circle" height="36" src={profileImage} width="36"/>
            </div>
            <div class="post-summary">
              <a class="link link-accent">Jiazhen Xie</a>
              in
              <a class="link link-accent">UK</a>
              <span class="post-meta dim-text">
                {this.post.created_at}
                <span class="post-meta">
                  <a class="link link-accent" href="<%= posts_path) %>">
                    <span class="label label-success">
                    </span>
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 col-md-offset-2 col-xs-12">
            <h1 class="post-title grey-header">
              {this.post.title}
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 col-md-offset-2 col-xs-12">
            <article class="markdown-body">
              {this.post.content}
            </article>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 col-md-offset-2 col-xs-12">
            <br/>
            <div id="disqus_thread"></div>
          </div>
        </div>
      </div>
    </section>
  }
}

export default Post;
